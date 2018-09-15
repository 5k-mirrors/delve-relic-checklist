import React from 'react';

import './styles.css';
import relics from '../relics.json';
import ListItem from './listitem';

import { addUrlProps, UrlQueryParamTypes, decode } from 'react-url-query';
import { configureUrlQuery } from 'react-url-query';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
configureUrlQuery({ history });

const urlPropsQueryConfig = {
  items: { type: UrlQueryParamTypes.array },
};

function mapUrlToProps(url, props) {
  return {
    items: decode(UrlQueryParamTypes.string, url.items)
  };
}

class List extends React.Component {
  constructor(props) {
    super(props);

    let checkList = localStorage.hasOwnProperty("checklist")
    ? JSON.parse(localStorage.getItem("checklist"))
    : [];

    if (this.props.items) {
      checkList = this.props.items.split(',');
    }

    this.sumOfRelics = 0;
    for (let category in relics) {
      this.sumOfRelics += Object.keys(relics[category]).length;
    }

    this.state = {
      hideAquired: false,
      checklist: checkList
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(relicId) {
    let checklist = this.state.checklist;
    let currentUrl = this.state.link;
    if (!this.state.checklist.includes(relicId)) checklist.push(relicId);
    else checklist.splice(checklist.indexOf(relicId), 1);
    this.props.onChangeItems(checklist);
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
                key={relics[category][relic].id}
                id={relics[category][relic].id}
              />
            ))}
          </div>
        </div>
      );
    });
    return (
      <div>
        <h2>{this.state.checklist.length} / {this.sumOfRelics}</h2>
        <label><strong><input type="checkbox" onChange={e => this.setState({hideAquired: !this.state.hideAquired})}/> Hide aquired relics</strong></label>
        <div className="containter">
          {listItems}
        </div>
      </div>
    );
  }
}

export default addUrlProps({ urlPropsQueryConfig, mapUrlToProps })(List);
