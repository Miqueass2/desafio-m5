export function initInstructionsPage(params) {
   const div = document.createElement('div');
   div.innerHTML = `
   <title-component></title-component>

   <button-component class="buttonGoPlay"></button-component>

   <hands-component></hands-component>

   `;

   const buttonGoPlay = div.querySelector('.buttonGoPlay');
   buttonGoPlay?.addEventListener('click', (e) => {
      e.preventDefault();
      params.goTo("/desafio-m5/play")
   });
   return div
}