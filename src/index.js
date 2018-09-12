import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import relics from "../relics.json";

class List extends React.Component {
  constructor(props) {
    super(props);

    let checkList = localStorage.hasOwnProperty("checklist")
    ? JSON.parse(localStorage.getItem("checklist"))
    : [];

    let sumOfRelics = 0;
    for (let relicKey in relics) {
      sumOfRelics += Object.keys(relics[relicKey]).length;
    }

    this.state = {
      hideAquired: false,
      checklist: checkList,
      sumOfRelics: sumOfRelics
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(relicName) {
    let checklist = this.state.checklist;
    if (!this.state.checklist.includes(relicName)) checklist.push(relicName);
    else checklist.splice(checklist.indexOf(relicName), 1);
    localStorage.setItem("checklist", JSON.stringify(checklist));
    this.setState({checklist: checklist});
  }

  render() {
    let listItems = Object.keys(relics).map(category => {
      return (
        <div className="checklist">
          <h2>{category}</h2>
          <div className="list">
            {Object.keys(relics[category]).map(relic => (
              <ListItem
                onClick={this.handleClick}
                checked={this.state.checklist.includes(relics[category][relic].name)}
                hideAquired={this.state.hideAquired}
                relicIcon={relics[category][relic].icon}
                relicName={relics[category][relic].name}
              />
            ))}
          </div>
        </div>
      );
    });
    return (
      <div>
        <h2>{this.state.checklist.length} / {this.state.sumOfRelics}</h2>
        <label><strong><input type="checkbox" onChange={e => this.setState({hideAquired: !this.state.hideAquired})}/> Hide aquired relics</strong></label>
        <div className="containter">
          {listItems}
        </div>
      </div>

    );
  }
}

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked
    };

    this.relicName = props.relicName;
    this.relicIcon = props.relicIcon;
  }

  handleClick() {
    this.setState({checked: !this.state.checked});
    this.props.onClick(this.relicName);
  }

  render() {
    return (
      (!this.props.hideAquired || !this.state.checked) && <div className={ this.state.checked ? "checked" : ""}>
        <label className="row">
          <div className="imgcontainer">
            <img
              className="icon"
              src={
                this.relicIcon +
                (!this.relicIcon.includes("/gen/") ? "&relic=1" : "")
              }
            />
          </div>
          <input
            checked={this.state.checked}
            type="checkbox"
            onClick={this.handleClick.bind(this)}
          />
          &nbsp;{this.relicName}
        </label>
      </div>
    );
  }
}

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
