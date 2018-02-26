import React from "react"

//Stateless functional Component
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}
Header.defaultProps = {
  title: "Choices are Hard"
}
export default Header
