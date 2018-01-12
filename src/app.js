console.log("Running on empty!")

let titles = {
  title: "Choices",
  subtitle: "They're hard",
  options: ["one", "Two", "Three"]
}
let template = (
  <div>
    <h1>{titles.title}</h1>

    {titles.subtitle && <h2>{titles.subtitle}</h2>}
    {titles.options.length > 0 ? "Your options are:" : "No Options"}
  </div>
)
let count = 0
const someID = "my-id"
const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button id={someID} className="button">
      +1
    </button>
  </div>
)
console.log(templateTwo)
const appRoot = document.getElementById("app")

ReactDOM.render(templateTwo, appRoot)
