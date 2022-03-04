import './index.css';
import {Watch} from './example-unit/watch';
import {Mode} from './example-unit/mode';
import {Increase} from './example-unit/increase';
import {Light} from './example-unit/light';
import {Reset} from './example-unit/reset';

// Setup
globalThis.currentMode = 0;
globalThis.increasedMinutes = 0;
globalThis.increasedHours = 0;
globalThis.ampm = false;

// New Instance of Watch
const watch = new Watch(document.getElementById("watch"));

// New Instance of Mode using a button listener
const mode = new Mode();

// New Instance of Increase using a button listener
const increase = new Increase();

// New Instance of Light using a button listener
const light = new Light(document.getElementById("watch"));

// New Instance of Reset using a button listener
const reset = new Reset();

