"use strict";

console.log("Running on empty!");

var titles = {
  title: "Choices",
  subtitle: "They're hard"
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    titles.title
  ),
  React.createElement(
    "h2",
    null,
    titles.subtitle
  )
);

var user = {
  name: "Bree Jackson",
  age: 27,
  location: "Palm Harbor"

  // let userName = "Bree Jackson"
  // let userAge = 27
  // let userLocation = "Palm Harbor"
};var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location
  )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
