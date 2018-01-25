console.log("Hello there beautiful!")

class Visable extends React.Component {
  constructor(props) {
    super(props)
    this.hidden = this.hidden.bind(this)
    this.state = {
      showing: false
    }
  }
  hidden() {
    this.setState((prevState) => {
      return {
        showing: !prevState.showing
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Harry Potter!</h1>
        <h3>Do you have your cloke? </h3>
        <button onClick={this.hidden}>{this.state.showing ? "No, I don't" : "Yes!! I have it!"}</button>
        {this.state.showing && (
          <div>
            <p>Hurry to the restricted section, Mr. Potter!</p>
          </div>
        )}
      </div>
    )
  }
}
ReactDOM.render(<Visable />, document.getElementById("app"))

// const appRoot = document.getElementById("app")
//
// let showing = false
//
// let hidden = () => {
//   showing = !showing
//   console.log(showing)
//   visable()
// }
//
// const visable = () => {
//   let template = (
//     <div>
//       <h1>Harry Potter!</h1>
//   <h3>Do you have your cloke?</h3>
//   <button onClick={hidden}>{showing ? "No, I don't" : "Yes!! I have it!"}</button>
//   {/* {showing === false ? "Hurry to the restricted section, Mr. Potter!" : ""} */}
//   {showing && (
//     <div>
//       <p>Hurry to the restricted section, Mr. Potter!</p>
//     </div>
//   )}
// </div>
//   )
//   ReactDOM.render(template, appRoot)
// }
// visable()
