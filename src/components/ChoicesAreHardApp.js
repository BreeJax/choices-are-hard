import React from "react"
import AddOption from "./AddOption"
import Options from "./Options"
import Header from "./Header"
import Action from "./Action"
import OptionModal from "./OptionModal"

class ChoicesAreHardApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  handleDeleteOptions = () => {
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  handleDeleteOne = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option
      })
    }))
  }
  handleDeleteSelectedOption = () => {
    this.setState(() => {
      return {
        selectedOption: undefined
      }
    })
  }
  handlePick = () => {
    let randomChoice = Math.floor(Math.random() * this.state.options.length)
    let option = this.state.options[randomChoice]

    this.setState(() => ({ selectedOption: option }))
  }
  handleAddOption = (option) => {
    if (!option) {
      return "enter valid value to add item"
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exist"
    }

    this.setState((prevState) => ({
      options: prevState.options.concat([option]) //mdn concat
    }))
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

  render() {
    const subtitle = "Let the computer do it"
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOne={this.handleDeleteOne}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          handleDeleteSelectedOption={this.handleDeleteSelectedOption}
        />
      </div>
    )
  }
}

export default ChoicesAreHardApp
