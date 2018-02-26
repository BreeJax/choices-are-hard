import React from "react"

//Stateless functional Component
const Option = (props) => {
  return (
    <div>
      Option: {props.optionText}
      <button
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
