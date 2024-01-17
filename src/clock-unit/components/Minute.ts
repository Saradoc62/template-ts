const minute_threshold = 60;

export class Minute {
    private value: number;
    constructor() {
      this.value = 0;
    }
  
    get(): number {
      return this.value;
    }

    increase(): void {
        this.value = (this.value + 1) % minute_threshold;
    }
  }
  