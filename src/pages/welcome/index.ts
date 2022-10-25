export function initHomePage(params) {
   const div = document.createElement('div');

   div.innerHTML = `
   <title-component></title-component>

   <button-component class="buttonEl"></button-component>
   `;
   const buttonEl = div.querySelector(".buttonEl") as HTMLButtonElement;
   buttonEl.addEventListener('click', (e) => {
      e.preventDefault();
      params.goTo("/instructions")
   })
   return div
}