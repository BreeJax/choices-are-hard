"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log("Hello there beautiful!");

var Visable = function (_React$Component) {
  _inherits(Visable, _React$Component);

  function Visable(props) {
    _classCallCheck(this, Visable);

    var _this = _possibleConstructorReturn(this, (Visable.__proto__ || Object.getPrototypeOf(Visable)).call(this, props));

    _this.hidden = _this.hidden.bind(_this);
    _this.state = {
      showing: false
    };
    return _this;
  }

  _createClass(Visable, [{
    key: "hidden",
    value: function hidden() {
      this.setState(function (prevState) {
        return {
          showing: !prevState.showing
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Harry Potter!"
        ),
        React.createElement(
          "h3",
          null,
          "Do you have your cloke? "
        ),
        React.createElement(
          "button",
          { onClick: this.hidden },
          this.state.showing ? "No, I don't" : "Yes!! I have it!"
        ),
        this.state.showing && React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            null,
            "Hurry to the restricted section, Mr. Potter!"
          )
        )
      );
    }
  }]);

  return Visable;
}(React.Component);

ReactDOM.render(React.createElement(Visable, null), document.getElementById("app"));

// const appRoot = document.getElementById("app")
//
// let showing = false
//
// let hidden = () => {
//   showing = !showing
//   console.log(showing)
//   visable()
// }
//
// const visable = () => {
//   let template = (
//     <div>
//       <h1>Harry Potter!</h1>
//   <h3>Do you have your cloke?</h3>
//   <button onClick={hidden}>{showing ? "No, I don't" : "Yes!! I have it!"}</button>
//   {/* {showing === false ? "Hurry to the restricted section, Mr. Potter!" : ""} */}
//   {showing && (
//     <div>
//       <p>Hurry to the restricted section, Mr. Potter!</p>
//     </div>
//   )}
// </div>
//   )
//   ReactDOM.render(template, appRoot)
// }
// visable()
