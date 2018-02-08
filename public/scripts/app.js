"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log("Hello Darkness my old friend");

var ChoicesAreHardApp = function (_React$Component) {
  _inherits(ChoicesAreHardApp, _React$Component);

  function ChoicesAreHardApp(props) {
    _classCallCheck(this, ChoicesAreHardApp);

    var _this = _possibleConstructorReturn(this, (ChoicesAreHardApp.__proto__ || Object.getPrototypeOf(ChoicesAreHardApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOne = _this.handleDeleteOne.bind(_this);
    _this.state = {
      options: props.options
    };
    return _this;
  }
  //livecycle method


  _createClass(ChoicesAreHardApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem("options");
        var options = JSON.parse(json);

        if (options) {
          this.setState(function () {
            return { options: options };
          });
        }
      } catch (e) {}
    }
    //livecycle method

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
        console.log("Saving Data");
      }
    }
    //livecycle method

  }, {
    key: "componentWillUnmount",
    value: function (_componentWillUnmount) {
      function componentWillUnmount() {
        return _componentWillUnmount.apply(this, arguments);
      }

      componentWillUnmount.toString = function () {
        return _componentWillUnmount.toString();
      };

      return componentWillUnmount;
    }(function () {
      console.log(componentWillUnmount);
    })
  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handleDeleteOne",
    value: function handleDeleteOne(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var randomChoice = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomChoice];
      alert(option);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return "enter valid value to add item";
      } else if (this.state.options.indexOf(option) > -1) {
        return "This option already exist";
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat([option]) //mdn concat
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var subtitle = "Let the computer do it";
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, { hasOptions: this.state.options.length > 0, handlePick: this.handlePick }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOne: this.handleDeleteOne
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return ChoicesAreHardApp;
}(React.Component);

ChoicesAreHardApp.defaultProps = {
  options: []

  //Stateless functional Component
};var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      "h2",
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: "Choices are Hard"

  //Stateless functional Component
};var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handlePick, disabled: !props.hasOptions },
      "What should I do?"
    )
  );
};

//Stateless functional Component
var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handleDeleteOptions },
      "Remove All Options"
    ),
    props.options.length === 0 && React.createElement(
      "p",
      null,
      "Add something to get started!"
    ),
    props.options.map(function (option) {
      return React.createElement(Option, { key: option, optionText: option, handleDeleteOne: props.handleDeleteOne });
    })
  );
};

//Stateless functional Component
var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    "Option: ",
    props.optionText,
    React.createElement(
      "button",
      {
        onClick: function onClick(e) {
          props.handleDeleteOne(props.optionText);
        }
      },
      "remove"
    )
  );
};

//class based Component

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);

      this.setState(function () {
        return { error: error };
      });

      if (!error) {
        e.target.elements.option.value = "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

//Stateless functional Component
// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   )
// }

// ReactDOM.render(<User name="Bree" age={25} />, document.getElementById("app"))

ReactDOM.render(React.createElement(ChoicesAreHardApp, null), document.getElementById("app"));
//ReactDOM.render(<ChoicesAreHardApp options={["option 1", "love"]} />, document.getElementById("app"))
