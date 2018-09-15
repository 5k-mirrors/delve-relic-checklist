import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import List from './list';
import GithubLinks from './GithubLinks/githubLinks';

class App extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
        <h1>PoE Relic Checklist</h1>
        <GithubLinks />
        <List />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
