import { initRouter } from "./router";
// import {state} from "./state"
//COMPONENTS
import { titleComponent } from "./components/title-text/";
import { buttonComponent } from "./components/button";
import { handsComponent } from "./components/rock-paper-scissors";
import { counterComponent } from "./components/count";
(function () {
   // state.getStorageSaved();
   titleComponent();
   buttonComponent();
   handsComponent();
   counterComponent();
   const div = document.querySelector('.root')!;
   initRouter(div);
})();
