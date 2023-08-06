import "./index.css";
import { Diagram } from "./watch/diagram";

fetch("src/watch/watch.html")
  .then((response) => response.text())
  .then((data) => {
    const defaultMode = 0;
    const defaulAddedTime = 0;
    const allClocksElement = document.getElementById("allClocks");
    const addClockButton = document.getElementById("addClockButton");
    const intervalId: NodeJS.Timeout | null = null;
    let clockIndex = 1;
    if (addClockButton && allClocksElement) {
      addClockButton.addEventListener("click", () => {

        const newClock = document.createElement("div");
        const newClockId = `clock${clockIndex}`;
        newClock.id = newClockId;

        const titleElement = document.createElement("h1");
        allClocksElement.appendChild(titleElement);
        allClocksElement.appendChild(newClock);

        setClock(data, newClockId, defaultMode, 0, intervalId);
        clockIndex++;
      });
    }

    const defaultId = "clockDefault";
    setClock(data, defaultId, defaultMode, defaulAddedTime, intervalId);
  })
  .catch((error) =>
    console.error("Erreur lors du chargement de watch.html", error),
  );

function setClock(
  data: string,
  clockId: string,
  defaultMode: number,
  addedTime: number,
  intervalId: NodeJS.Timeout | null,
) {
  const watchContentElement = document.getElementById(clockId);
  if (watchContentElement) {
    watchContentElement.innerHTML = data;
  }

  const diagram = new Diagram(defaultMode, addedTime, 0, clockId);
  diagram.initClock();
  if (intervalId === null) {
    setInterval(diagram.updateClock, 1000);
  }

  const mode = watchContentElement.querySelector("#mode");
  if (mode) {
    mode.addEventListener("click", () => {
      diagram.changeMode();
    });
  }

  const increase = watchContentElement.querySelector("#increase");
  if (increase) {
    increase.addEventListener("click", () => {
      diagram.addTime();
    });
  }

  const light = watchContentElement.querySelector("#light");
  if (light) {
    light.addEventListener("click", () => {
      diagram.turnTheLight();
    });
  }

}

