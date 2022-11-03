abstract class ModeController {
    constructor(protected readonly watch: Watch, public readonly name: string) {}
    abstract onIncreasePress(): void
    abstract onTick(): void
}

class HourController extends ModeController {
    constructor(protected readonly watch: Watch) { super(watch, "Hour Mode"); }

    onIncreasePress(): void {
        let newValue = 1 + this.watch.getHours();
        if (newValue >= 24) newValue = 0;
        this.watch.setHours(newValue);
    }

    onTick(): void { ;; }
}

class MinuteController extends ModeController {
    constructor(protected readonly watch: Watch) { super(watch, "Minute Mode"); }

    onIncreasePress(): void {
        let newValue = 1 + this.watch.getMinutes();
        if (newValue >= 60) newValue = 0;
        this.watch.setMinutes(newValue);
    }

    onTick(): void { ;; }
}

class SecondController extends ModeController {
    constructor(protected readonly watch: Watch) { super(watch, "Second Mode"); }

    onIncreasePress(): void {
        let newValue = 1 + this.watch.getSeconds();
        if (newValue >= 60) newValue = 0;
        this.watch.setSeconds(newValue);
    }

    onTick(): void { ;; }
}

class IdleController extends ModeController {
    constructor(protected readonly watch: Watch) { super(watch, "Idle Mode"); }

    onIncreasePress(): void { ;; }

    onTick(): void {
        this.watch.setSeconds(1 + this.watch.getSeconds());
    }
}

class FSM_Cycle<T> {
    private list: Array<T>
    private state: number

    constructor() {
        this.list = [];
        this.state = 0;
    }

    add(element: T): void {
        this.list.push(element);
    }

    next(): void {
        if (this.list.length > 0) {
            this.state = (this.state + 1) % this.list.length;
        }
        else {
            console.error('Trying to call "next" on empty FSM');
        }
    }

    get(index = this.state): T {
        if (this.list.length > 0) {
            return this.list[this.state];
        }
        else {
            console.error('Trying to call "get" on empty FSM');
        }
    }
}

export class Watch {
    private readonly mode_fsm: FSM_Cycle<ModeController>;
    private tickId: ReturnType<typeof setInterval>;
    private element: Element;

    constructor(private hours: number = 0, private minutes: number = 0, private seconds: number = 0, private light: boolean = false) {
        // No checks on negative times on purpose.

        this.mode_fsm = new FSM_Cycle();
        this.mode_fsm.add(new IdleController(this));
        this.mode_fsm.add(new HourController(this));
        this.mode_fsm.add(new MinuteController(this));
        this.mode_fsm.add(new SecondController(this));

        this.createElement();

        // Setup a fancier ticker here
        this.tickId = setInterval(() => this.onTick(), 1000);
    }

    // Independent
    onModePress(): void {
        this.mode_fsm.next();
        this.updateElement();
    }

    // Mode dependent
    onTick(): void {
        this.mode_fsm.get().onTick();
        this.updateElement();
    }

    // Mode dependent
    onIncreasePress(): void {
        this.mode_fsm.get().onIncreasePress();
        this.updateElement();
    }

    // Independent
    onLightPress(): void {
        this.setLight(!this.getLight());
        this.updateElement();
    }

    update(): void {
        let time = 3600*this.hours + 60*this.minutes + this.seconds;
        let hms = [0, 0, 0];
        let lim = [3600, 60, 1];
        for (let i = 0; i < hms.length; i++) {
            let div = lim[i];
            let r = time % div;
            let q = time - r
            hms[i] = q / div;
            time = r;
        }
        [this.hours, this.minutes, this.seconds] = hms;
        this.hours %= 24; // no days counting

        this.updateElement();
    }

    createElement(): void {
        let elem = document.createElement('div');
        elem.id = 'watch-000';

        // State
        let state = document.createElement('div');
        elem.appendChild(state);
        state.appendChild(document.createElement('div')).className = 'watch-time';
        state.appendChild(document.createElement('div')).className = 'watch-light';
        state.appendChild(document.createElement('div')).className = 'watch-mode';

        // Action buttons
        let btnMode = document.createElement('button');
        elem.appendChild(btnMode);
        btnMode.textContent = "Mode"; // or a translation string
        btnMode.className = "watch-btn-mode"
        btnMode.addEventListener('click', () => this.onModePress());

        let btnIncrease = document.createElement('button');
        elem.appendChild(btnIncrease);
        btnIncrease.textContent = "Increase";
        btnIncrease.className = "watch-btn-increase"
        btnIncrease.addEventListener('click', () => this.onIncreasePress());

        let btnLight = document.createElement('button');
        elem.appendChild(btnLight);
        btnLight.textContent = "Light"
        btnLight.className = "watch-btn-light"
        btnLight.addEventListener('click', () => this.onLightPress());

        // bind
        this.element = elem;

        this.updateElement();
    }

    updateElement(): void {
        let state = this.element.children[0];
        let [h,m,s] = [this.getHours(), this.getMinutes(), this.getSeconds()];
        state.children[0].textContent = [h,m,s].map(x => x.toString().padStart(2, '0')).join(':');
        state.children[1].textContent = 'Light: ' + this.getLight();
        state.children[2].textContent = 'Mode: ' + this.getMode();
    }

    getElement(): Element { return this.element; }
    getMode(): string { return this.mode_fsm.get().name; }

    getHours(): number { return this.hours; }
    setHours(hours: number): void {
        this.hours = hours;
        if (!(0 <= this.hours && this.hours < 24)) {
            this.update();
        }
    }

    getMinutes(): number { return this.minutes; }
    setMinutes(minutes: number): void {
        this.minutes = minutes;
        if (!(0 <= this.minutes && this.minutes < 60)) {
            this.update();
        }
    }

    getSeconds(): number { return this.seconds; }
    setSeconds(seconds: number): void {
        this.seconds = seconds;
        if (!(0 <= this.seconds && this.seconds < 60)) {
            this.update();
        }
    }

    getLight(): boolean { return this.light; }
    setLight(light: boolean): void {
        this.light = light;
    }
}
