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
var someID = "my-id";
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
    { id: someID, className: "button" },
    "+1"
  )
);
console.log(templateTwo);
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
