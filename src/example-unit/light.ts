export class Light {
  // Declare a class variable of type "Element"
  element: Element;

  constructor(currentElement: any) {
    this.element = currentElement;
    // Create button listener
    let button = document.getElementById("lightButton");
    button.addEventListener("click", (e: Event) => this.toggleLight());
  }

  // Toggle the light mode
  toggleLight() {
    this.element.classList.toggle("dark-mode");
  }
}
