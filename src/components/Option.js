import React from "react"

//Stateless functional Component
const Option = (props) => {
  return (
    <div className="option">
      <p>
        {props.count}. {props.optionText}
      </p>
      <button
        className="button button--link"
        onClick={(e) => {
          props.handleDeleteOne(props.optionText)
        }}
      >
        remove
      </button>
    </div>
  )
}
export default Option
