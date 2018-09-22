import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import List from './list';
import GithubLinks from './GithubLinks/githubLinks';
import Footer from './Footer/footer';
import Logo from './logo/logo';
import Favicon from 'Favicon';
import DelveBG from 'DelveBG';
import { Helmet } from 'react-helmet';

class App extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <div>
          <Helmet>
            <link rel="icon" href={Favicon} type="image/png" sizes="16x16" />
            <body background={DelveBG}>
            </body>
          </Helmet>
        </div>
        <div className="App">
          <Logo />
          <h1>PoE Relic Checklist</h1>
          <GithubLinks />
          <List />
          <Footer />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
