import "./App.css";
import Card from "./components/Card";

import Break from "./components/break";
import Media from "./components/Operators/Media";
import Sum from "./components/Operators/Sum";
import Raffle from "./components/Operators/Raffle";

function App() {
  return (
    <div className="App">
      <h1> React-redux</h1>
      <div className="linha">
        <Break red />
      </div>
      <div className="linha">
        <Media />
        <Sum />
        <Raffle />
      </div>
    </div>
  );
}

export default App;
