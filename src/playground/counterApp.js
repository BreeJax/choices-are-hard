console.log("Hey there")

// have to be carefull when using livecycle methods to not make any of the numbers into string, otherwise math becomes impossible.

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

  //livecycle method
  componentDidMount() {
    const stringCount = localStorage.getItem("count")
    const count = parseInt(stringCount, 10)

    if (!isNaN(count)) {
      this.setState(() => ({ count: count }))
    }
  }
  //livecycle method
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count)
    }
  }
  //livecycle method
  // componentWillUnmount() {
  //   console.log(componentWillUnmount)
  // }

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
        count: prevState.count + 0
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

//ReactDOM.render(<CounterApp count={-10}/>, document.getElementById("app")) <= this overrides the 0 above.

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
