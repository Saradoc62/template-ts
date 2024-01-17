const minute_threshold = 60;

export class Minute {
    private value: number;
    constructor() {
      this.value = 0;
    }
  
    get(): number {
      return this.value;
    }

    increase(): boolean {
      // returns true if the threshold is reached and false otherwise
      const newValue = this.value + 1
      this.value = (newValue) % minute_threshold;
      return newValue >= minute_threshold;
    }
  }
  