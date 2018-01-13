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
const addOne = () => {
  count++
  console.log("add One", count)
}
const minusOne = () => {
  count--
  console.log("minus One", count)
}
const reset = () => {
  count = 0
  console.log("reset", count)
}

const appRoot = document.getElementById("app")

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  )

  ReactDOM.render(templateTwo, appRoot)
}

renderCounterApp()
