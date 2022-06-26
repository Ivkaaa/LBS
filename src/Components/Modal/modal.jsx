import React from "react";
import "./modal.scss"

function Modal(props) {
    
    return <div id="modal-container">
        <div className="modal-wrapp">
            <h2>{props.employee.fullName};</h2>
            <h3>Technology: {props.employee.technology};</h3>
            <h3>Seniority: {props.employee.seniority};</h3>
            <h4>Linkedin address: {props.employee.linkedin};</h4>
            <h4>Salary: {props.employee.salary}€;</h4>
        </div>
        <button onClick={props.closeModal}>X</button>
    </div>
}

export default Modal;