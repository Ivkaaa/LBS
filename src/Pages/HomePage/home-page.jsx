import React, { useState } from "react";
import './home-page.scss';
import Header from '../../Components/Header/header';
import EmployeeCard from '../../Components/EmployeeCard/employee-card';
import Modal from '../../Components/Modal/modal'

function HomePage(props) {
    const [openModal, setOpenModal] = useState(false);
    
    function toggleModal(){
        setOpenModal(!openModal)
    }

    

    return <div>
        <Header />

        { props.developerRes.map( e => <EmployeeCard employee = {e} openModal = {toggleModal}/>) }
        { openModal && props.developerRes.map( e => <Modal closeModal = {toggleModal} employee = {e}/> ) }
    </div>
}

export default HomePage;