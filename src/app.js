console.log("Hello Darkness my old friend")

const obj = {
  name: "Bree",
  getName() {
    return this.name
  }
}
const getName = obj.getName.bind(obj)
// const getName = obj.getName.bind({ name: "Kyle" }) <= this is a replacement method. Let's not do this.

console.log(getName())

class ChoicesAreHardApp extends React.Component {
  render() {
    const title = "Choices are Hard"
    const subtitle = "Let the computer do it"
    const options = ["Thing one", "Thing two", "Thing three", "Thing four", "Five"]
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick() {
    alert("handlePick")
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props)
    this.removeAllOptions = this.removeAllOptions.bind(this)
  }
  removeAllOptions() {
    console.log(this.props.options)
    // alert("removeAllOptions")
  }
  render() {
    return (
      <div>
        {this.props.options.map((option) => <Option key={option} optionText={option} />)}
        <button onClick={this.removeAllOptions}>Remove All Options</button>
      </div>
    )
  }
}

class AddOption extends React.Component {
  onFormSubmit(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()

    if (option) {
      alert(option)
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    console.log(this.props.optionText)
    return <div>Option: {this.props.optionText}</div>
  }
}

// const jsx = (    <---- Works, but not needed
//   <div>
//     <Header />
//     <Action />
//     <Options />
//     <AddOption />
//   </div>
// )

ReactDOM.render(<ChoicesAreHardApp />, document.getElementById("app"))
