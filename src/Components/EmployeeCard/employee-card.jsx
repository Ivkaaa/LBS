import React from "react";
import "./employee-card.scss";

function EmployeeCard(props){


    return <div id="employee-card">
        <img className="user-image" src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png" alt=""></img>
        <div>
            <h2>{props.employee.fullName}</h2>
            <h3>Position: Frontend Developer</h3>
            <button onClick={props.openModal}>Info</button>
        </div>
    </div>
}

export default EmployeeCard;