import React from "react";
import "./App.css";

import Contador from "./components/Contador";

function App() {
  return (
    <div className="App">
      <Contador valorInicial={1} />
    </div>
  );
}

export default App;
