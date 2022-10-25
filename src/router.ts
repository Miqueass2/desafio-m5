import { initHomePage } from "./pages/welcome";
import { initInstructionsPage } from "./pages/instructions";
import { initGamePage } from "./pages/play";
import { initResultsPage } from "./pages/results";
const BASE_PATH = "/desafio-m5";
const route = [{
   path: /\/desafio-m5\/welcome/,
   action: initHomePage,
},
{
   path: /\/desafio-m5\/instructions/,
   action: initInstructionsPage,
},
{
   path: /\/desafio-m5\/play/,
   action: initGamePage,
},
{
   path: /\/desafio-m5\/results/,
   action: initResultsPage,
}
];

export function initRouter(container: Element) {
   
   function isGithubPages() {
      return location.host.includes("github.io");
   }

   function goTo(path) {
      const completePath = isGithubPages() ? BASE_PATH + path : path;

      history.pushState({}, '', completePath);
      
      handleRoute(completePath)
   }
   function handleRoute(routes) {
      for (const r of route) {
         if (r.path.test(routes)) {

            const el = r.action({ goTo: goTo });
            if (container.firstChild) {
               container.firstChild.remove();
            }
            container.appendChild(el);
         }
      }
   }
   if (location.pathname == '/' || location.pathname== "/desafio-m5") {
      goTo("/desafio-m5/welcome")
   } else {
         handleRoute(location.pathname);
      }
      window.onpopstate = function () {
         handleRoute(location.pathname);
      }

}