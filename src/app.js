console.log("Running on empty!")

let titles = {
  title: "Choices",
  subtitle: "They're hard",
  options: []
}

let onFormSubmit = (e) => {
  e.preventDefault()
  const option = e.target.elements.option.value

  if (option) {
    titles.options.push(option)
    e.target.elements.option.value = ""
    renderApp()
  }
}
let clearAll = () => {
  titles.options = []
  renderApp()
}

let makeChoice = () => {
  let randomNum = Math.floor(Math.random() * titles.options.length)
  let option = titles.options[randomNum]
  alert(option)
}
const appRoot = document.getElementById("app")

const renderApp = () => {
  let template = (
    <div>
      <h1>{titles.title}</h1>
      {titles.subtitle && <h2>{titles.subtitle}</h2>}
      {titles.options.length > 0 ? "Your options are:" : "No Options"}
      <button disabled={titles.options.length === 0} onClick={makeChoice}>
        What should I do?
      </button>
      <button onClick={clearAll}>Clear All Options</button>
      <ol>
        {titles.options.map((option) => {
          return <li key={option}>{option}</li>
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  )
  ReactDOM.render(template, appRoot)
}
renderApp()
