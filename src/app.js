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
const count = 0
const addOne = () => {
  console.log("add One")
}
const minusOne = () => {
  console.log("minus One")
}
const reset = () => {
  console.log("reset")
}
const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
)
console.log(templateTwo)
const appRoot = document.getElementById("app")

ReactDOM.render(templateTwo, appRoot)
