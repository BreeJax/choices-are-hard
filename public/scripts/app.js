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

var user = {
  name: "Bree Jackson",
  age: 25,
  location: "Palm Harbor"
};

var getLocation = function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
};

// let userName = "Bree Jackson"
// let userAge = 27
// let userLocation = "Palm Harbor"
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Hidden"
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
