export function titleComponent() {
   class Title extends HTMLElement{
      shadow: ShadowRoot = this.attachShadow({ mode: 'open' });
      constructor() {
         super();
         this.render();
      }
      
      render() {
         const style = document.createElement('style');
         style.textContent = `
         .title{
            font-size: 80px;
            width: 266px;
            color: #43dc8f;
            margin: 115px 55px 70px 90px;
            animation: movement 1.5s infinite;
         }
         @keyframes movement {
            20% {transform: translateY(10px);}
            20% {transform: translateY(-10px);}

         }
         .div-content-title{
            display: flex;
            justify-content: center;
            align-items: center;
         }

         @media (min-width:960px){
            .title{
            font-size: 86px;
            }
         }
         `;

         const div = document.createElement('div');
         div.classList.add("div-content-title");
         div.innerHTML = `
         <h1 class="title">Piedra Papel ó Tijera</h1>
         `;
         
         if (location.pathname === "/desafio-m5/instructions") {
            const hijito = div.children[0];
            hijito.textContent = `
            Presioná jugar
            y elegí: piedra, papel o tijera antes de que pasen los 3 segundos
            `
            const arrowDown = document.createElement('p');
            arrowDown.classList.add('arrow');
            arrowDown.innerText = '↓'

            hijito.appendChild(arrowDown);
            style.textContent = `
            .title{
               font-size: 40px;
               color:#ffffff;
               margin:102px 31px 25px 27px;
               width: 317px;
               text-align: center;
            }
            .div-content-title{
               display: flex;
               justify-content: center;
               align-items: center;
            }
            .arrow{
               margin: 23px;
               height: 0;
               animation:movementArrow 2s infinite;
               color: #43dc8f;
               text-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4;
            }
            @keyframes movementArrow{
               20% {transform: translateY(10px);}
               20% {transform: translateY(-10px);}
            }
            `;
         }
         this.shadow.appendChild(div)
         this.shadow.appendChild(style);
   }
   }
   customElements.define('title-component', Title);
}