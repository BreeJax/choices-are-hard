"use strict";

console.log("Running on empty!");

var titles = {
  title: "Choices",
  subtitle: "They're hard",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    titles.options.push(option);
    e.target.elements.option.value = "";
    renderApp();
  }
};
var clearAll = function clearAll() {
  titles.options = 0;
  renderApp();
};
var appRoot = document.getElementById("app");

var renderApp = function renderApp() {
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
      "p",
      null,
      titles.options.length
    ),
    React.createElement(
      "button",
      { onClick: clearAll },
      "Clear All Options"
    ),
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
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};
renderApp();
