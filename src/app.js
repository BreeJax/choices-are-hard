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
    <ol>
      <li> Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
)
const appRoot = document.getElementById("app")
let count = 0
let addOne = () => {
  count++
  //count = count + 1
  renderCounterApp()
}
let minusOne = () => {
  count--
  //count = count - 1
  renderCounterApp()
}
let reset = () => {
  count = 0
  renderCounterApp()
}

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
