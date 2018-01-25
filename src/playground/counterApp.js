console.log("Hey Bree")

class CounterApp extends React.Component {
  constructor(props) {
    super(props)
    this.addOne = this.addOne.bind(this)
    this.minusOne = this.minusOne.bind(this)
    this.resetCounter = this.resetCounter.bind(this)
    this.state = {
      count: 0
    }
  }
  minusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }
  addOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }
  resetCounter() {
    this.setState(() => {
      return {
        count: 0
      }
    })
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
    // this.setState({
    //   count: 0
    // })
    // this.setState({
    //   count: this.state.count + 1
    // }) <= this makes it so that it doens't render correctly- adding one rather then simply setting it to 0, or 1 as the above code does. Passing an object is probably never going to be used again.
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.resetCounter}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<CounterApp />, document.getElementById("app"))

// let count = 0
// let addOne = () => {
//   count++
//   //count = count + 1
//   renderCounterApp()
// }
// let minusOne = () => {
//   count--
//   //count = count - 1
//   renderCounterApp()
// }
// let reset = () => {
//   count = 0
//   renderCounterApp()
// }
//
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   )
//
//   ReactDOM.render(templateTwo, appRoot)
// }
//
// renderCounterApp()
