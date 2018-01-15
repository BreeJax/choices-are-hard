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
