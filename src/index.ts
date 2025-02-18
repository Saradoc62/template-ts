import './index.css';
import { MyClass } from './example-unit';

import { ClockModel } from "./ClockModel";
import { ClockView } from "./ClockView";
import { ClockController } from "./ClockController";


const a = new MyClass(2);
console.log('number is', a.get());

const model = new ClockModel();
const view = new ClockView();

const controller = new ClockController(model, view);