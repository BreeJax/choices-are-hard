"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log("Hey there");

// have to be carefull when using livecycle methods to not make any of the numbers into string, otherwise math becomes impossible.

var CounterApp = function (_React$Component) {
  _inherits(CounterApp, _React$Component);

  function CounterApp(props) {
    _classCallCheck(this, CounterApp);

    var _this = _possibleConstructorReturn(this, (CounterApp.__proto__ || Object.getPrototypeOf(CounterApp)).call(this, props));

    _this.addOne = _this.addOne.bind(_this);
    _this.minusOne = _this.minusOne.bind(_this);
    _this.resetCounter = _this.resetCounter.bind(_this);
    _this.state = {
      count: 0
    };
    return _this;
  }

  //livecycle method


  _createClass(CounterApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var stringCount = localStorage.getItem("count");
      var count = parseInt(stringCount, 10);

      if (!isNaN(count)) {
        this.setState(function () {
          return { count: count };
        });
      }
    }
    //livecycle method

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
        localStorage.setItem("count", this.state.count);
      }
    }
    //livecycle method
    // componentWillUnmount() {
    //   console.log(componentWillUnmount)
    // }

  }, {
    key: "minusOne",
    value: function minusOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
    }
  }, {
    key: "addOne",
    value: function addOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: "resetCounter",
    value: function resetCounter() {
      this.setState(function () {
        return {
          count: 0
        };
      });
      this.setState(function (prevState) {
        return {
          count: prevState.count + 0
        };
      });
      // this.setState({
      //   count: 0
      // })
      // this.setState({
      //   count: this.state.count + 1
      // }) <= this makes it so that it doens't render correctly- adding one rather then simply setting it to 0, or 1 as the above code does. Passing an object is probably never going to be used again.
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
          "Count: ",
          this.state.count
        ),
        React.createElement(
          "button",
          { onClick: this.addOne },
          "+1"
        ),
        React.createElement(
          "button",
          { onClick: this.minusOne },
          "-1"
        ),
        React.createElement(
          "button",
          { onClick: this.resetCounter },
          "reset"
        )
      );
    }
  }]);

  return CounterApp;
}(React.Component);

ReactDOM.render(React.createElement(CounterApp, null), document.getElementById("app"));

//ReactDOM.render(<CounterApp count={-10}/>, document.getElementById("app")) <= this overrides the 0 above.

// let count = 0
// let addOne = () => {
//   count++
//   //count = count + 1
//   renderCounterApp()
// }
// let minusOne = () => {
//   count--
//   //count = count - 1
//   renderCounterApp()
// }
// let reset = () => {
//   count = 0
//   renderCounterApp()
// }
//
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   )
//
//   ReactDOM.render(templateTwo, appRoot)
// }
//
// renderCounterApp()
