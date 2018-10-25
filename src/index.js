import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Hello />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
