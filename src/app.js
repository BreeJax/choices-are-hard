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
  }
  renderApp()
}

const appRoot = document.getElementById("app")

const renderApp = () => {
  let template = (
    <div>
      <h1>{titles.title}</h1>
      {titles.subtitle && <h2>{titles.subtitle}</h2>}
      {titles.options.length > 0 ? "Your options are:" : "No Options"}
      <p>{titles.options.length}</p>
      <ol>
        <li> Item One</li>
        <li>Item Two</li>
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
