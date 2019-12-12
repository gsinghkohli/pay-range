import React from "react";
import ReactDOM from "react-dom";

import Routes from "./Routes";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      APP
      <Routes />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
