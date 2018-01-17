"use strict";

console.log("Hello there beautiful!");

var appRoot = document.getElementById("app");

var showing = false;

var hidden = function hidden() {
  showing = !showing;
  console.log(showing);
  visable();
};

var visable = function visable() {
  var template = React.createElement(
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
      "Do you have your cloke?"
    ),
    React.createElement(
      "button",
      { onClick: hidden },
      showing ? "No, I don't" : "Yes!! I have it!"
    ),
    showing && React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Hurry to the restricted section, Mr. Potter!"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};
visable();
