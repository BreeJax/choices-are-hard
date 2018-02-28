import React from "react"
import Modal from "react-modal"

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleDeleteSelectedOption}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="customModal"
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button className="button" onClick={props.handleDeleteSelectedOption}>
      Cool!
    </button>
  </Modal>
)

export default OptionModal

// !!undefined === false and !!"test" === true
