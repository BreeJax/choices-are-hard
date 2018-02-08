console.log("Hello Darkness my old friend")

class ChoicesAreHardApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOne = this.handleDeleteOne.bind(this)
    this.state = {
      options: props.options
    }
  }
  //livecycle method
  componentDidMount() {
    try {
      let json = localStorage.getItem("options")
      let options = JSON.parse(json)

      if (options) {
        this.setState(() => ({ options: options }))
      }
    } catch (e) {}
  }
  //livecycle method
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem("options", json)
      console.log("Saving Data")
    }
  }
  //livecycle method
  componentWillUnmount() {
    console.log(componentWillUnmount)
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  handleDeleteOne(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option
      })
    }))
  }
  handlePick() {
    let randomChoice = Math.floor(Math.random() * this.state.options.length)
    let option = this.state.options[randomChoice]
    alert(option)
  }
  handleAddOption(option) {
    if (!option) {
      return "enter valid value to add item"
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exist"
    }

    this.setState((prevState) => ({
      options: prevState.options.concat([option]) //mdn concat
    }))
  }

  render() {
    const subtitle = "Let the computer do it"
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOne={this.handleDeleteOne}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

ChoicesAreHardApp.defaultProps = {
  options: []
}

//Stateless functional Component
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: "Choices are Hard"
}

//Stateless functional Component
const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  )
}

//Stateless functional Component
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All Options</button>
      {props.options.length === 0 && <p>Add something to get started!</p>}
      {props.options.map((option) => (
        <Option key={option} optionText={option} handleDeleteOne={props.handleDeleteOne} />
      ))}
    </div>
  )
}

//Stateless functional Component
const Option = (props) => {
  return (
    <div>
      Option: {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOne(props.optionText)
        }}
      >
        remove
      </button>
    </div>
  )
}

//class based Component
class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault()

    let option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)

    this.setState(() => ({ error: error }))

    if (!error) {
      e.target.elements.option.value = ""
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

//Stateless functional Component
// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   )
// }

// ReactDOM.render(<User name="Bree" age={25} />, document.getElementById("app"))

ReactDOM.render(<ChoicesAreHardApp />, document.getElementById("app"))
//ReactDOM.render(<ChoicesAreHardApp options={["option 1", "love"]} />, document.getElementById("app"))
