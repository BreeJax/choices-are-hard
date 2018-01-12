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
  titles.options.length > 0 ? "Your options are:" : "No Options"
);
var count = 0;
var addOne = function addOne() {
  console.log("add One");
};
var minusOne = function minusOne() {
  console.log("minus One");
};
var reset = function reset() {
  console.log("reset");
};
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
console.log(templateTwo);
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
