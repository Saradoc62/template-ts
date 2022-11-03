import './index.css';
import { MyClass } from './example-unit';

const a = new MyClass(2);
console.log('number is', a.get());


import { Watch } from './watch-unit';
const w = new Watch();
// console.log(w);

// Option 1
// Element integrated in the Watch class
document.getElementsByTagName('body')[0].appendChild(w.getElement());

// Option 2
// Element handled by outside
let elem = document.getElementById('watch');
let actions = elem.children[1]
actions.children[0].addEventListener("click", () => w.onModePress());
actions.children[1].addEventListener("click", () => w.onIncreasePress());
actions.children[2].addEventListener("click", () => w.onLightPress());


let mainLoop = setInterval(() => {
    let elem = document.getElementById('watch');
    let state = elem.children[0]
    let [h,m,s] = [w.getHours(), w.getMinutes(), w.getSeconds()];
    state.children[0].textContent = [h,m,s].map(x => x.toString().padStart(2, '0')).join(':'); // just some formatting
    state.children[1].textContent = 'Light: ' + w.getLight();
    state.children[2].textContent = 'Mode: ' + w.getMode();
}, 250);