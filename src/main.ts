import { TimeModel } from "./models/TimeModel.js";
import { TimeView } from "./views/TimeView.js";
import { TimeController } from "./controllers/TimeController.js";

const app = new TimeController(new TimeModel(), new TimeView());
