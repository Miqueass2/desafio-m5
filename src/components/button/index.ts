export function buttonComponent() {
   class Button extends HTMLElement{
      shadow: ShadowRoot = this.attachShadow({ mode: 'open' });
      constructor() {
         super();
         this.render();
      }
      render() {
         const style = document.createElement('style');
         style.textContent = `
         .container-button{
            display: flex;
            justify-content: center;
            align-items:center;
         }
         .button-el{
            width: 320px;
            height: 70px;
            font-size: 45px;
            border-radius: 7px;
            background-color: #dfd6b0;
            border: 7px solid;
            border-color: darkgray;
         }
         `;
         const div = document.createElement('div');
         div.classList.add("container-button");
         div.innerHTML = `
         <button class="button-el">Empezar</button>
         `;
         this.shadow.appendChild(div);
         this.shadow.appendChild(style);

         if (location.pathname === "/instructions") {
            const hijito = div.children[0];
            
            hijito.textContent = `¡Jugar!`

            style.textContent = `
            .button-el{
               width: 320px;
               height: 70px;
               font-size: 45px;
               border-radius: 7px;
               background-color: #dfd6b0;
               border: 7px solid;
               border-color: darkgray;
            }
            .container-button{
               display: flex;
               justify-content: center;
               align-items:center;
            }
            `;
         
         }
      }
   }
   customElements.define('button-component', Button);
}