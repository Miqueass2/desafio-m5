import { state } from "../../state";
export function initResultsPage(params) {
   const div = document.createElement('div');
   const style = document.createElement('style');

   const currentState = state.getState()
   const currenStatePlayer = currentState.history.player;
   const currenStatePlayerComputer = currentState.history.computer;
   const stateWhoWins = state.whoWins();

   console.log(stateWhoWins);
   if (stateWhoWins == "ganaste") {
      style.textContent = `
      .content-result-text{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 12px 102px 70px 111px;
            color:#43dc8f;
            animation:moverWin 1.1s infinite
         }
   
         @keyframes moverWin {
            15% {transform: translateY(50px);
               color: green;
            }
   
            55% {transform: translateY(60px);
               color: white;
            }
         }
   
         .result-win{
            font-size:60px;
            letter-spacing:6px;
         }
         .content-results{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap:7px;
            width: 234px;
            margin: auto;
            background-color: blanchedalmond;
            border: 10px solid #647c65;
            border-radius: 15px;
         }
         .score{
            font-size: 55px;
            margin: 0;
         }
         .tu{
            font-size: 40px;
            margin: 0;
         }
         .computer{
            font-size: 40px;
            margin: 0;
         }
   
         .button-container{
            display: flex;
            justify-content: center;
            margin: 10px;
            }
            
         .button{
            width: 335px;
            height: 75px;
            background-color: #a0d1a2;
            border-style: none;
            font-size: 25px;
            border: 6px solid #345c36;
            border-radius: 9px;
         }
         .button-salir-container{
            display: flex;
            justify-content: center;
            margin: 10px;
         }
         .salir{
            width: 335px;
            height: 75px;
            background-color: #a0d1a2;
            border-style: none;
            font-size: 25px;
            border: 6px solid #345c36;
            border-radius: 9px;
      }
      `;
      div.innerHTML = `
            <div class="content-result-text">
            <h1 class="result-win">Ganaste!</h1>
            </div>
            
            <div class="content-results">
            <h2 class="score">Score</h2>
            <p class="tu">Vos: ${currenStatePlayer}</p>
            <p class="computer">Máquina: ${currenStatePlayerComputer}</p>
            </div>
            
            <div class="button-container">
               <button class="button">Volver a jugar</button>
            </div>
            <div class="button-salir-container">
               <button class="salir">Salir</button>
            </div>
            `;
      
      const playAgainButton = div.querySelector('.button');
      playAgainButton?.addEventListener('click', () => {
         params.goTo("/desafio-m5/play");
      });


      //AL SALIR SE REINICIA LOS PUNTOS A 0 
      const outOfGameButton = div.querySelector('.salir');
      outOfGameButton?.addEventListener('click', () => {
         params.goTo("/desafio-m5/welcome");
         
         state.setState({
            ...currentState,
            history: {
               player: 0,
               computer: 0,
               results: "",
            }
         });
      })

      div.appendChild(style);
      return div;
   }
   if (stateWhoWins === "perdiste") {
      style.textContent = `
      .content-result-text{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 12px 102px 70px 111px;
            color:#ef1d1d;
            animation:moverLose 2.1s infinite
         }
   
         @keyframes moverLose {
            15% {transform: translateY(50px);
               color: #800005;
            }
   
            55% {transform: translateY(60px);
               color: white;
            }
         }
   
         .result-lose{
            font-size:60px;
            letter-spacing:6px;
         }
         .content-results{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap:7px;
            width: 234px;
            margin: auto;
            background-color: blanchedalmond;
            border: 10px solid #647c65;
            border-radius: 15px;
         }
         .score{
            font-size: 55px;
            margin: 0;
         }
         .tu{
            font-size: 40px;
            margin: 0;
         }
         .computer{
            font-size: 40px;
            margin: 0;
         }
   
         .button-container{
            display: flex;
            justify-content: center;
            margin: 10px;
            }
            
         .button{
            width: 335px;
            height: 75px;
            background-color: #a0d1a2;
            border-style: none;
            font-size: 25px;
            border: 6px solid #345c36;
            border-radius: 9px;
         }
         .button-salir-container{
            display: flex;
            justify-content: center;
            margin: 10px;
         }
         .salir{
            width: 335px;
            height: 75px;
            background-color: #a0d1a2;
            border-style: none;
            font-size: 25px;
            border: 6px solid #345c36;
            border-radius: 9px;
      }
      `;

      div.innerHTML = `
      <div class="content-result-text">
            <h1 class="result-lose">Perdiste</h1>
            </div>
            
            <div class="content-results">
            <h2 class="score">Score</h2>
            <p class="tu">Vos: ${currenStatePlayer}</p>
            <p class="computer">Máquina: ${currenStatePlayerComputer}</p>
            </div>
            
            <div class="button-container">
               <button class="button">Volver a jugar</button>
            </div>
            <div class="button-salir-container">
               <button class="salir">Salir</button>
            </div>
      `;
      

      const playAgainButton = div.querySelector('.button');
      playAgainButton?.addEventListener('click', () => {
         params.goTo("/desafio-m5/play");
      });

      const outOfGameButton = div.querySelector('.salir');
      outOfGameButton?.addEventListener('click', () => {
         params.goTo("/desafio-m5/welcome");
         state.setState({
            ...currentState,
            history: {
               player: 0,
               computer: 0,
               results: "",
            }
         });
      });

      div.appendChild(style);
      return div;
   }
   if (stateWhoWins === "empate") {
      style.textContent = `
      .content-result-text{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 12px 102px 70px 111px;
            color:#ef9e1d;
            animation:moverEmpate 2.1s infinite
         }
   
         @keyframes moverEmpate {
            15% {transform: translateY(20px);
            }
   
            55% {transform: translateY(-20px);
            }
         }
   
         .result-empate{
            font-size:60px;
            letter-spacing:6px;
         }
         .content-results{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap:7px;
            width: 234px;
            margin: auto;
            background-color: blanchedalmond;
            border: 10px solid #647c65;
            border-radius: 15px;
         }
         .score{
            font-size: 55px;
            margin: 0;
         }
         .tu{
            font-size: 40px;
            margin: 0;
         }
         .computer{
            font-size: 40px;
            margin: 0;
         }
   
         .button-container{
            display: flex;
            justify-content: center;
            margin: 10px;
            }
            
         .button{
            width: 335px;
            height: 75px;
            background-color: #a0d1a2;
            border-style: none;
            font-size: 25px;
            border: 6px solid #345c36;
            border-radius: 9px;
         }
         .button-salir-container{
            display: flex;
            justify-content: center;
            margin: 10px;
         }
         .salir{
            width: 335px;
            height: 75px;
            background-color: #a0d1a2;
            border-style: none;
            font-size: 25px;
            border: 6px solid #345c36;
            border-radius: 9px;
      }
   
      `;

      div.innerHTML = `
      <div class="content-result-text">
            <h1 class="result-empate">Empate</h1>
            </div>
            
            <div class="content-results">
            <h2 class="score">Score</h2>
            <p class="tu">Vos: ${currenStatePlayer}</p>
            <p class="computer">Máquina: ${currenStatePlayerComputer}</p>
            </div>
            
            <div class="button-container">
               <button class="button">Volver a jugar</button>
            </div>
            <div class="button-salir-container">
               <button class="salir">Salir</button>
            </div>
      `;

      const playAgainButton = div.querySelector('.button');
      playAgainButton?.addEventListener('click', () => {
         params.goTo("/desafio-m5/play");
      });

      const outOfGameButton = div.querySelector('.salir');
      outOfGameButton?.addEventListener('click', () => {
         params.goTo("/desafio-m5/welcome");
         state.setState({
            ...currentState,
            history: {
               player: 0,
               computer: 0,
               results: "",
            }
         });
      })

      div.appendChild(style);
      return div;
   }
   return div
}
