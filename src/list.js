import React from 'react';

import './styles.css';
import relics from '../relics.json';
import ListItem from './listitem';

import { addUrlProps, UrlQueryParamTypes, decode, encode, replaceInUrlQuery  } from 'react-url-query';
import { configureUrlQuery } from 'react-url-query';
import createHistory from 'history/createBrowserHistory';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';

const LZString = require('lz-string');

const history = createHistory();
configureUrlQuery({ history });

function mapUrlToProps(url, props) {
  return {
    items: url.items ? decode(UrlQueryParamTypes.array, LZString.decompressFromEncodedURIComponent(url.items)) : decode(UrlQueryParamTypes.array, url.items)
  };
};

function mapUrlChangeHandlersToProps(props) {
  return {
    onChangeItems: (value) => replaceInUrlQuery('items', LZString.compressToEncodedURIComponent(encode(UrlQueryParamTypes.array, value))),
  };
};

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #b20808 30%, #ba1818 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 20px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

class List extends React.Component {
  constructor(props) {
    super(props);

    let checkList = localStorage.hasOwnProperty("checklist")
    ? JSON.parse(localStorage.getItem("checklist"))
    : [];

    if (this.props.items) {
      checkList = this.props.items.map(i => parseInt(i, 10));
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
    this.clearChecklistAndLocalStorage = this.clearChecklistAndLocalStorage.bind(this);
  }

  handleClick(relicId) {
    let checklist = this.state.checklist;
    if (!checklist.includes(relicId)) checklist.push(relicId);
    else checklist.splice(checklist.indexOf(relicId), 1);
    this.props.onChangeItems(checklist);
    localStorage.setItem("checklist", JSON.stringify(checklist));
    this.setState({checklist: checklist});
  }

  clearChecklistAndLocalStorage() {
    localStorage.removeItem('checklist');
    this.setState({
      checklist: []
    }, () => this.props.onChangeItems(this.state.checklist));
  }

  render() {
    let listItems = Object.keys(relics).map(category => {
      return (
        <div className="checklist" key={category}>
          <h2>{category}</h2>
          <div className="list">
            {Object.keys(relics[category]).map(relic => (
              <ListItem
                onClick={this.handleClick}
                checked={this.state.checklist.includes(relics[category][relic].id)}
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
        <div>
          <h3 className="counter transparent-tile">
           {this.state.checklist.length} / {this.sumOfRelics}
          </h3>
          <StyledButton variant="contained" onClick={this.clearChecklistAndLocalStorage} color="secondary">
             Clear
             <DeleteIcon />
           </StyledButton>
        </div>
        <label className="transparent-tile"><strong><input type="checkbox" onChange={e => this.setState({hideAquired: !this.state.hideAquired})}/> Hide aquired relics</strong></label>
        <div className="containter">
          {listItems}
        </div>
      </div>
    );
  }
}

export default addUrlProps({ mapUrlToProps, mapUrlChangeHandlersToProps })(List);
