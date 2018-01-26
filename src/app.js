console.log("Hello Darkness my old friend")

class ChoicesAreHardApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.state = {
      options: ["Thing one", "Thing two", "Thing three", "Thing four", "7"]
    }
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  handlePick() {
    let randomChoice = Math.floor(Math.random() * this.state.options.length)
    let option = this.state.options[randomChoice]
    alert(option)
  }

  render() {
    const title = "Choices are Hard"
    const subtitle = "Let the computer do it"
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
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
  render() {
    return (
      <div>
        <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
          What should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {this.props.options.map((option) => <Option key={option} optionText={option} />)}
        <button onClick={this.props.handleDeleteOptions}>Remove All Options</button>
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
