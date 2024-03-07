import React, { Component } from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";
//import names array

import "./styles.css";

const renderNameTag = (name) => <NameTag key={name} name={name} />;

class App extends Component {
  state = { names: ["Mel", "Jake", "Frankie", "Allirra", "Michelle"] };

  render() {
    const NameTagElements = this.state.names.map(renderNameTag);
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        {NameTagElements}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
