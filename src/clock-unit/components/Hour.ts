const hour_threshold = 24;

export class Hour {
    private value: number;
    constructor() {
      this.value = 0;
    }
  
    get(): number {
      return this.value;
    }

    increase(): void {
        this.value = (this.value + 1) % hour_threshold;
    }
  }
  