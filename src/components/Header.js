import React from "react"

//Stateless functional Component
const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
  </div>
)

Header.defaultProps = {
  title: "Choices are Hard"
}
export default Header
