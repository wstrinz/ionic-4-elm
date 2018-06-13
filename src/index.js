import "./main.css";
import { Main } from "./Main.elm";
import registerServiceWorker from "./registerServiceWorker";
import "@ionic/core/dist/ionic";

Main.embed(document.getElementById("root"));

registerServiceWorker();
