import React from "react"

//Stateless functional Component
const Action = (props) => {
  return (
    <div>
      <button className="big_button" onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  )
}

export default Action
