console.log("Running on empty!")

// let titles = {
//   title: "Choices",
//   subtitle: "They're hard"
// }
let template = (
  <div>
    <h1>Choices Are Hard</h1>
    <p>This is a test</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
)

let user = {
  name: "Bree Jackson",
  age: 27,
  location: "Palm Harbor"
}

// let userName = "Bree Jackson"
// let userAge = 27
// let userLocation = "Palm Harbor"
let templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
)
let appRoot = document.getElementById("app")

ReactDOM.render(templateTwo, appRoot)
