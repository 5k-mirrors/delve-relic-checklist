import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked
    };

    this.relicName = props.relicName;
    this.relicIcon = props.relicIcon;
    this.id = props.id;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      checked: nextProps.checked
    });
  }

  handleClick() {
    this.setState({checked: !this.state.checked});
    this.props.onClick(this.id);
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
            readOnly
          />
          &nbsp;{this.relicName}
        </label>
      </div>
    );
  }
}

export default ListItem;
