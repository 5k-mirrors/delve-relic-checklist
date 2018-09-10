"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

require("./styles.css");

var _relics = require("../relics.json");

var _relics2 = _interopRequireDefault(_relics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var checklist = localStorage.hasOwnProperty("checklist") ? JSON.parse(localStorage.getItem("checklist")) : [];

var List = function (_React$Component) {
  _inherits(List, _React$Component);

  function List(props) {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this));

    _this.listItems = Object.keys(_relics2.default).map(function (category) {
      return _react2.default.createElement(
        "div",
        { className: "checklist" },
        _react2.default.createElement(
          "h2",
          null,
          category
        ),
        _react2.default.createElement(
          "div",
          { className: "containter" },
          Object.keys(_relics2.default[category]).map(function (relic) {
            return _react2.default.createElement(ListItem, {
              relicIcon: _relics2.default[category][relic].icon,
              relicName: _relics2.default[category][relic].name
            });
          })
        )
      );
    });
    return _this;
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var items = this.listItems.map(function (thing) {
        return thing;
      });
      return items;
    }
  }]);

  return List;
}(_react2.default.Component);

var ListItem = function (_React$Component2) {
  _inherits(ListItem, _React$Component2);

  function ListItem(props) {
    _classCallCheck(this, ListItem);

    var _this2 = _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this));

    _this2.state = {
      checked: checklist.includes(props.relicName)
    };

    _this2.relicName = props.relicName;
    _this2.relicIcon = props.relicIcon;
    _this2.handleClick = _this2.handleClick.bind(_this2);
    return _this2;
  }

  _createClass(ListItem, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        checked: !this.state.checked
      });

      if (!this.state.checked) checklist.push(this.relicName);else checklist.splice(checklist.indexOf(this.relicName), 1);
      localStorage.setItem("checklist", JSON.stringify(checklist));
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: this.state.checked ? "checked" : "" },
        _react2.default.createElement(
          "label",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "imgcontainer" },
            _react2.default.createElement("img", {
              className: "icon",
              src: this.relicIcon + (!this.relicIcon.includes("/gen/") ? "&relic=1" : "")
            })
          ),
          _react2.default.createElement("input", {
            checked: this.state.checked,
            type: "checkbox",
            onClick: this.handleClick
          }),
          "\xA0",
          this.relicName
        )
      );
    }
  }]);

  return ListItem;
}(_react2.default.Component);

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "App" },
        _react2.default.createElement(
          "h1",
          null,
          "PoE Relic Checklist"
        ),
        _react2.default.createElement(List, null)
      );
    }
  }]);

  return App;
}(_react2.default.Component);

var rootElement = document.getElementById("root");
_reactDom2.default.render(_react2.default.createElement(App, null), rootElement);