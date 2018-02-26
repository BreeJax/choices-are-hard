import React from "react"
import Option from "./Option"

//Stateless functional Component
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All Options</button>
      {props.options.length === 0 && <p>Add something to get started!</p>}
      {props.options.map((option) => (
        <Option key={option} optionText={option} handleDeleteOne={props.handleDeleteOne} />
      ))}
    </div>
  )
}

export default Options
