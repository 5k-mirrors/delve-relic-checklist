import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import List from './list';

import Background from '../public/background.png';

class App extends React.Component {
  constructor(){
    super();
  }

  render() {
    let backgroundStyle = {
      backgroundImage: `url(${Background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100px"
    };

    return (
      <div className="App" style={ backgroundStyle }>
        <h1>PoE Relic Checklist</h1>
        <List />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
