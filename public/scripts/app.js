"use strict";

console.log("Running on empty!");

var titles = {
  title: "Choices",
  subtitle: "They're hard",
  options: ["one", "Two", "Three"]
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    titles.title
  ),
  titles.subtitle && React.createElement(
    "h2",
    null,
    titles.subtitle
  ),
  titles.options.length > 0 ? "Your options are:" : "No Options",
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      " Item One"
    ),
    React.createElement(
      "li",
      null,
      "Item Two"
    )
  )
);
var appRoot = document.getElementById("app");
var count = 0;
var addOne = function addOne() {
  count++;
  //count = count + 1
  renderCounterApp();
};
var minusOne = function minusOne() {
  count--;
  //count = count - 1
  renderCounterApp();
};
var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: minusOne },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: reset },
      "reset"
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
