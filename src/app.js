console.log("Running on empty!")

let titles = {
  title: "Choices",
  subtitle: "They're hard",
  options: ["one", "Two", "Three"]
}
let template = (
  <div>
    <h1>{titles.title}</h1>

    {titles.subtitle && <h2>{titles.subtitle}</h2>}
    {titles.options.length > 0 ? "Your options are:" : "No Options"}
  </div>
)

let user = {
  name: "Bree Jackson",
  age: 25,
  location: "Palm Harbor"
}

const getLocation = (location) => {
  if (location) {
    return <p>Location: {location}</p>
  }
}

// let userName = "Bree Jackson"
// let userAge = 27
// let userLocation = "Palm Harbor"
let templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Hidden"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
)
const appRoot = document.getElementById("app")

ReactDOM.render(template, appRoot)
