import "./App.css";
import Card from "./components/Card";

import Intervalo from "./components/intervalo";
import Media from "./components/Operadores/Media";
import Soma from "./components/Operadores/Soma";
import Sorteio from "./components/Operadores/Sorteio";

function App() {
  return (
    <div className="App">
      <h1> React-redux</h1>
      <div className="linha">
        <Intervalo red />
      </div>
      <div className="linha">
        <Media />
        <Soma />
        <Sorteio />
      </div>
    </div>
  );
}

export default App;
