import React from "react"
import Option from "./Option"

//Stateless functional Component
const Options = (props) => (
  <div>
    <div className="widget_header">
      <h3>Your Options</h3>
      <button className="button button--link" onClick={props.handleDeleteOptions}>
        Remove All Options
      </button>
    </div>
    {props.options.length === 0 && <p className="
    widget__message">Add something to get started!</p>}
    {props.options.map((option, index) => (
      <Option key={option} optionText={option} handleDeleteOne={props.handleDeleteOne} count={index + 1} />
    ))}
  </div>
)

export default Options
