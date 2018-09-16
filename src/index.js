import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import List from './list';
import GithubLinks from './GithubLinks/githubLinks';
import Logo from './logo/logo';
import Favicon from 'react-favicon';
import FacivonLogo from 'Favicon';

class App extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <div>
          <Favicon url={FacivonLogo}/>
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
