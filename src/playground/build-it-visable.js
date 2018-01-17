console.log("Hello there beautiful!")

const appRoot = document.getElementById("app")

let showing = false

let hidden = () => {
  showing = !showing
  console.log(showing)
  visable()
}

const visable = () => {
  let template = (
    <div>
      <h1>Harry Potter!</h1>
      <h3>Do you have your cloke?</h3>
      <button onClick={hidden}>{showing ? "No, I don't" : "Yes!! I have it!"}</button>
      {/* {showing === false ? "Hurry to the restricted section, Mr. Potter!" : ""} */}
      {showing && (
        <div>
          <p>Hurry to the restricted section, Mr. Potter!</p>
        </div>
      )}
    </div>
  )
  ReactDOM.render(template, appRoot)
}
visable()
