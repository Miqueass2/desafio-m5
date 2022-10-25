const imgRock = require("url:../../assets/piedra.png");
const imgPaper = require("url:../../assets/papel.png");
const imgScissors = require("url:../../assets/tijera.png");

export function handsComponent() {
class Rock extends HTMLElement{
   shadow: ShadowRoot = this.attachShadow({ mode: 'open' });
      constructor() {
         super();
         this.render();
      }
      render() {
         const style = document.createElement('style');
         style.textContent = `
         .container-hands{
            position: relative;
            top: 58px;
            display: flex;
            justify-content: center;
            gap: 46px;
         }
         .hand-rock{
            width: 70px;
            height: 120px;
            position: relative;
            right: -112px;
            cursor:pointer;
         }

         .hand-elegido-piedra{
            transform: translateY(-50px);
            transition:.2s;
            
         }
         .hands-descartados-piedra{
            opacity: 31%;
            transform: scale(0.5);
            transition: 1s;
         }
         .hands-descartados-papel{
            opacity: 31%;
            transform: scale(0.5);
            transition: 1s;
         }
         .hands-descartados-tijera{
            opacity: 31%;
            transform: scale(0.5);
            transition: 1s;
         }
         .hands-none{
            display:none;
         }
         
         .hands-relocation-rock{
            position: relative;
            top: 170px;
            right: 0px;
            height: 154px;
            transition:0s;
            width:90px
         }
         
         .hand-paper{
            width: 70px;
            height: 120px;
            position: relative;
            right: -122px;
            cursor:pointer;
         }
         .hands-relocation-paper{
            position: relative;
            top: 170px;
            right: 0px;
            width:90px;
            height: 154px;
            transition:none;
         }
         
         .hand-elegido-papel{
            transform: translateY(-50px);
            transition:.2s;
            
         }

         .hand-scissors{
            width: 70px;
            height: 120px;
            position: relative;
            right: 234px;
            cursor:pointer;
         }
         .hand-relocation-scissors{
            position: relative;
            top: 170px;
            right: 0px;
            width:90px;
            height: 154px;
            transition:none;
         }

         .hand-elegido-tijera{
            transform: translateY(-50px);
            transition:.2s;
            
         }
         `

         this.shadow.innerHTML = `
         <div class="container-hands">
            <img class="hand-rock" src="${imgRock}" alt="" />
            <img class="hand-paper" src="${imgPaper}" alt="" />
            <img class="hand-scissors" src="${imgScissors}" alt="" />
         </div>
         `;
         this.shadow.appendChild(style);
      }
   }
   customElements.define('hands-component', Rock);
}