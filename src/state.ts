type Jugada = "piedra" | "papel" | "tijera";
type Results = "ganaste" | "perdiste" | "empate"
export const state = {
   data: {
      //acá se guarda los que selecciono cada uno en la partida
      currentGame: {
         computerPlay:"",
         myPlay: "",
      },
      history: {
         player: 0,
         computer: 0,
         results: ""
      }
   },
   getStorageSaved() {
      const data = localStorage.getItem("state-game");
      if (localStorage.getItem("state-game")) {
         this.data.history = data;
      }
   },
   getState() {
      return this.data;
   },
   setState(newState) {
      this.data = newState;

      localStorage.setItem("state-game", JSON.stringify(newState));
   },
   setMove(movement:Jugada) {
      const currentState = state.getState();
      currentState.currentGame.myPlay = movement;
      //aqui elijo el movmiento aleatorio invocando el metodo AleatoryMove(). 
      currentState.currentGame.computerPlay = this.AleatoryMove();
      
      this.setState(currentState);
      // console.log("soy data guardada", currentState);
      this.pushHistory()
   },
   AleatoryMove() {
      const moves= ["piedra", "papel", "tijera"];
      const randomMove = Math.floor(Math.random() * 3);
      return moves[randomMove];
   },
   pushHistory() {
      const currentState = this.getState();
      const currentStateWins:Results = this.whoWins();
      const myPlayScore = currentState.history.player;
      const computerScore = currentState.history.computer;
      
      if (currentStateWins == "ganaste") {
         this.setState({
            ...currentState,
            history: {
               player: myPlayScore + 1,
               computer: computerScore,
               results: "ganaste",
            }
         });
      }
      if (currentStateWins == "perdiste") {
         this.setState({
            ...currentState,
            history: {
               player: myPlayScore,
               computer: computerScore+1,
               results: "perdiste",
            }
         });
      }
      if (currentStateWins == "empate") {
         this.setState({
            ...currentState,
            history: {
               player: myPlayScore,
               computer: computerScore,
               results: "empate",
            }
         });
      }
      console.log("soy wins",currentStateWins);
   },
   whoWins():Results {
      const currentState = this.getState();
      const cb = currentState.currentGame;
      const win = [
         cb.myPlay == "piedra" && cb.computerPlay == "tijera",
         cb.myPlay == "papel" && cb.computerPlay == "piedra",
         cb.myPlay == "tijera" && cb.computerPlay == "papel"
      ];
      
      const lose = [
         cb.myPlay == "piedra" && cb.computerPlay == "papel",
         cb.myPlay == "papel" && cb.computerPlay == "tijera",
         cb.myPlay == "tijera" && cb.computerPlay == "piedra",
      ];
      
      
      if (win.includes(true)) {
         return "ganaste";
      }
      
      if (lose.includes(true)) {
         return "perdiste";
      } else {
         return "empate";
      }
   },

}

