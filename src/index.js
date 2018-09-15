import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import List from './list';

class App extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
        <h1>PoE Relic Checklist</h1>
        <List />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
