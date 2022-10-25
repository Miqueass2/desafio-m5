import { state } from "../../state";

export function initGamePage(params) {
   const imgRock = require("url:../../assets/piedra.png");
   const imgPaper = require("url:../../assets/papel.png");
   const imgScissors = require("url:../../assets/tijera.png");
   const div = document.createElement('div');
   // creo estilos para las hands computer 
   const style = document.createElement('style');
   div.innerHTML = `
   <count-component class="contador-component"></count-component>
   
   <div class="hands-computer">
      <img class="hand-rock-computer" src="${imgRock}" alt="" />
      <img class="hand-paper-computer" src="${imgPaper}" alt="" />
      <img class="hand-scissors-computer" src="${imgScissors}" alt="" />
   </div>

   <hands-component class="hands"></hands-component>

   `;
   style.textContent = `
   .hands-computer{
      display:none;
      justify-content:center;
      gap: 10px;
      transform: rotate(180deg);
      position: relative;
      bottom: -2px;
   }
   .hand-rock-computer{
      width: 90px;
      height: 154px;
   
   }
   .hand-paper-computer{
      width: 90px;
      height: 154px;
   }
   .hand-scissors-computer{
      width: 90px;
      height: 154px;
   }
   .computer-relocation{
      position:relative;
      top:-50px;
   }

   
   `;
   
   //Aca creo un contador diferente al contador original
   //cuando pasa los 3 segundos sin elegir nada, se dirige a la seccion instrucciones
   let counterGeneral = 3;
   const stopCounter = setInterval(() => {
      counterGeneral--
      // apenas el contador llega a 0, ya no escuchan los click las manos
      if (counterGeneral == 0) {
         handsRock.removeEventListener('click', listenerHandRock);
         handsPaper.removeEventListener('click',listenerHandPaper);
         handsScissors.removeEventListener('click',listenerHandScissors);
         
      }
      if (counterGeneral < -1) {
         
         params.goTo("/desafio-m5/instructions")
         clearInterval(stopCounter);
         
      }
   }, 1300);
   
   
   // acceder a las manos dentro del componente de esta forma..
   //seleccionamos el component hands con la clase que le asignamos.  
   const handsMove = div.querySelector('.hands');
   //intente hacer una especie de for para tomar las manos pero no me los tomaba
   //entonces seleccioné uno por uno 
   const handsRock:any = handsMove?.shadowRoot?.children[0].children[0]!
   const handsPaper:any = handsMove?.shadowRoot?.children[0].children[1]!
   const handsScissors:any = handsMove?.shadowRoot?.children[0].children[2]!
   
   //aqui los selecciono por clase y los comparo con ifs
   const typeRock = handsRock.getAttribute('class');
   const typePaper = handsPaper.getAttribute('class');
   const typeScissors = handsScissors.getAttribute('class');

   function listenerHandRock() {
      if (typeRock == "hand-rock") {
         state.setMove("piedra");
         handRockActive("piedra")
      }
   }
   handsRock?.addEventListener('click', listenerHandRock);



   function listenerHandPaper() {
      if (typePaper == "hand-paper") {
         state.setMove("papel");
         handRockActive("papel")
      }
      
   }

   handsPaper?.addEventListener('click',listenerHandPaper);


   function listenerHandScissors() {
      if (typeScissors == "hand-scissors") {
         state.setMove("tijera");
         handRockActive("tijera")
      }
      
   }

   handsScissors?.addEventListener('click',listenerHandScissors);


   //function para mostrar las manos segun lo que selecciona
   function handRockActive(params:string) {
      if (params == "piedra") {
         handsRock.classList.add('hand-elegido-piedra');
         handsPaper.classList.add('hands-descartados-papel');

         handsScissors.classList.add('hands-descartados-tijera');
            


         setTimeout(() => {
            handsPaper.style.display = "none"
            handsScissors.style.display = "none"

            handsRock.classList.add('hands-relocation-rock');
            // handsRock.classList.add('hands-width');
         }, 1500);

         handsRock.removeEventListener('click', listenerHandRock);
         handsPaper.removeEventListener('click',listenerHandPaper);
         handsScissors.removeEventListener('click',listenerHandScissors);
         clearInterval(stopCounter);
         
         computerMove()
      }
      if  (params == "papel") {
         handsPaper.classList.remove('hands-descartados-papel');
         handsPaper.classList.add('hand-elegido-papel');
         
         handsRock.classList.remove('hand-elegido-piedra');
         handsRock.classList.add('hands-descartados-piedra');
         
         // handsScissors.classList.remove('hands-descartados-papel');
         handsScissors.classList.add('hands-descartados-tijera');

         setTimeout(() => {
            handsRock.style.display = "none";
            handsScissors.style.display = "none";

            handsPaper.classList.remove('hand-paper')
            handsPaper.classList.add('hands-relocation-paper')

         }, 1500);

         handsRock.removeEventListener('click', listenerHandRock);
         handsPaper.removeEventListener('click',listenerHandPaper);
         handsScissors.removeEventListener('click',listenerHandScissors);
         clearInterval(stopCounter);
         computerMove()

      }
      if (params == "tijera") {
         handsScissors.classList.remove('hands-descartados-tijera');
         handsScissors.classList.add('hand-elegido-tijera');
         
         handsRock.classList.remove("hand-elegido-piedra")
         handsRock.classList.add("hands-descartados-piedra")
         
         handsPaper.classList.add("hands-descartados-papel")

         setTimeout(() => {
            handsRock.style.display = "none";
            handsPaper.style.display = "none";

            handsScissors.classList.add('hand-relocation-scissors')

         }, 1500);

         handsRock.removeEventListener('click', listenerHandRock);
         handsPaper.removeEventListener('click',listenerHandPaper);
         handsScissors.removeEventListener('click',listenerHandScissors);
         clearInterval(stopCounter);
         computerMove()
         
      }
   }


   
   function computerMove() {


      const computerRandomMove = state.getState().currentGame.computerPlay;
      if (computerRandomMove == "piedra") {
         setTimeout(() => {
            const contadorComponent = div.querySelector('.contador-component')!;
            const styleComponent:any = contadorComponent.shadowRoot?.children[0]!
            styleComponent.style.display = "none";

            //computer move
            const handsComputer:any = div.querySelector('.hands-computer')!;
            handsComputer.style.display = "flex";
            const handPaperComputer:any = div.querySelector('.hand-paper-computer')!;
            handPaperComputer.style.display = "none";
            
            const handsScissorsComputer:any = div.querySelector('.hand-scissors-computer')!;
            handsScissorsComputer.style.display = "none";
            
            const handRockComputer: any = div.querySelector('.hand-rock-computer')!;
            handRockComputer.classList.add('computer-relocation');
            
            setTimeout(() => {
               params.goTo("/desafio-m5/results")
               }, 1650);
         }, 1500)
      }
      if (computerRandomMove == "papel") {
         setTimeout(() => {
               
            const contadorComponent = div.querySelector('.contador-component')!;
            const styleComponent:any = contadorComponent.shadowRoot?.children[0]!
            styleComponent.style.display = "none";

            //computer move

            const handsComputer:any = div.querySelector('.hands-computer')!;
            handsComputer.style.display = "flex";
            const handRockComputer:any = div.querySelector('.hand-rock-computer')!;
            handRockComputer.style.display = "none";
            
            const handsScissorsComputer:any = div.querySelector('.hand-scissors-computer')!;
            handsScissorsComputer.style.display = "none";
            
            const handPaperComputer: any = div.querySelector('.hand-paper-computer')!;
            handPaperComputer.classList.add('computer-relocation');
            
            setTimeout(() => {
               params.goTo("/desafio-m5/results")
            },1650)

         }, 1500);
      }

      if (computerRandomMove == "tijera") {
         setTimeout(() => {
               
            const contadorComponent = div.querySelector('.contador-component')!;
            const styleComponent:any = contadorComponent.shadowRoot?.children[0]!
            styleComponent.style.display = "none";

            //computer move
            
            const handsComputer:any = div.querySelector('.hands-computer')!;
            handsComputer.style.display = "flex";
            const handRockComputer:any = div.querySelector('.hand-rock-computer')!;
            handRockComputer.style.display = "none";
            
            const handPaperComputer:any = div.querySelector('.hand-paper-computer')!;
            handPaperComputer.style.display = "none";
            
            const handsScissors: any = div.querySelector('.hand-scissors-computer')!;
            handsScissors.classList.add('computer-relocation');

            setTimeout(() => {
               params.goTo("/desafio-m5/results")
            },1650)
            
         }, 1500);
      }


   }
   
   div.appendChild(style);
   return div
}