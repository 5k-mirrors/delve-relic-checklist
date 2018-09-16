import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import List from './list';
import GithubLinks from './GithubLinks/githubLinks';
import Logo from './logo/logo';
import Favicon from 'react-favicon';
import favicon from 'favicon';

class App extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <div>
          <Favicon url={favicon}/>
        </div>

        <div className="App">
          <Logo />
          <h1>PoE Relic Checklist</h1>
          <GithubLinks />
          <List />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
