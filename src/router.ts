import { initHomePage } from "./pages/welcome";
import { initInstructionsPage } from "./pages/instructions";
import { initGamePage } from "./pages/play";
import { initResultsPage } from "./pages/results";
const BASE_PATH = "/desafio-m5";
const route = [{
   path: /\/welcome/,
   action: initHomePage,
},
{
   path: /\/instructions/,
   action: initInstructionsPage,
},
{
   path: /\/play/,
   action: initGamePage,
},
{
   path: /\/results/,
   action: initResultsPage,
}
];

export function initRouter(container: Element) {
   
   function isGithubPages() {
      return location.host.includes("miqueass2.github.io");
   }

   function goTo(path) {
      const completePath = isGithubPages() ? BASE_PATH + path : path;

      history.pushState({}, '', completePath);
      
      handleRoute(completePath)
   }
   function handleRoute(routes) {

      const newRoute = isGithubPages() ? routes.replace(BASE_PATH, "") : routes;
      for (const r of route) {
         if (r.path.test(newRoute)) {

            const el = r.action({ goTo: goTo });
            if (container.firstChild) {
               container.firstChild.remove();
            }
            container.appendChild(el);
         }
      }
   }
   if (location.pathname == '/' || location.pathname== "/desafio-m5/") {
      goTo("/welcome")
   } else {
         handleRoute(location.pathname);
      }
      window.onpopstate = function () {
         handleRoute(location.pathname);
      }

}