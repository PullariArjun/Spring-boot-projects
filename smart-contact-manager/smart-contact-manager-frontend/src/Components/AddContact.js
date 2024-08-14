// import { Link } from "react-router-dom"
// import CustomNavbar from "./Navbar"
import axios from 'axios';
import '../App.css'
import React, { useEffect, useLayoutEffect, useState } from 'react';
// import Dashboard from './Dashboard'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Sidenav from './Navbar';

const Addcontact = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!localStorage.getItem("email")) {
            navigate("/login");
        }
    }, [navigate]);

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: 'Female',
        email: '',
        phoneNumber: ''

    })

    const notify = msg => toast(msg);

    const HandleSubmit = (e) => {
        e.preventDefault();

        console.log(data)
        if (!data.firstName) {
            notify("Enter valid Firstname")
            return;
        } else if (!data.lastName) {
            notify("Enter Valid Lastname")
            return;
        } else if (data.phoneNumber.length !== 10) {
            alert(typeof (data.phoneNumber))

            notify("Enter Valid PhoneNumber")
            return;
        }

        const url = "http://localhost:8080/addContact/" + localStorage.getItem("email");

        axios.put(url, data);
        notify("Added contact")
    }
    return (
        <Sidenav className="d-flex align-items-center justify-content-center">
                <div class="card shadow-2-strong card-registration display p-5 bg-primary" style={{ borderRadius: "15px"}}>
                    <div className="d-flex align-items-center justify-content-center">

                        <h3 class="fw-bold mb-2 text-white text-uppercase ">ADD CONTACT</h3>
                    </div>
                    <form onSubmit={HandleSubmit}>

                        <div class="row">
                            <div class="col-md-6 mb-4">

                                <div data-mdb-input-init class="form-outline">
                                    <input
                                    style={{border:"1px solid green"}} type="text" id="firstName" class="form-control form-control-lg" placeholder="First Name" onChange={e => { setData({ ...data, firstName: e.target.value }) }} />
                                    <label class="form-label" for="firstName">First Name</label>
                                </div>

                            </div>
                            <div class="col-md-6 mb-4">

                                <div data-mdb-input-init class="form-outline">
                                    <input
                                    style={{border:"1px solid green"}} type="text" id="lastName" class="form-control form-control-lg" placeholder="Last Name" onChange={e => { setData({ ...data, lastName: e.target.value }) }} />
                                    <label class="form-label" for="lastName">Last Name</label>
                                </div>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-4 d-flex align-items-center">

                                <div data-mdb-input-init class="form-outline datepicker w-100">
                                    <input
                                    style={{border:"1px solid green"}} 
                                    type="date" 
                                    class="form-control form-control-lg" 
                                    id="birthdayDate" placeholder="Birth Day" onChange={e => { setData({ ...data, dateOfBirth: e.target.value }) }} />
                                    <label for="birthdayDate" class="form-label">Birthday</label>
                                </div>

                            </div>
                            <div class="col-md-6 mb-4">

                                <h6 class="mb-2 pb-1">Gender: </h6>

                                <div class="form-check form-check-inline">
                                    <input
                                    style={{border:"1px solid green"}} class="form-check-input" type="radio" name="Gender" id="femaleGender"
                                        value="Female"/>
                                    <label class="form-check-label" for="femaleGender" onChange={e => { setData({ ...data, gender: e.target.value }) }}>Female</label>
                                </div>

                                <div class="form-check form-check-inline">
                                    <input
                                    style={{border:"1px solid green"}} class="form-check-input" type="radio" name="Gender" id="maleGender"
                                        value="Male" onChange={e => { setData({ ...data, gender: e.target.value }) }} />
                                    <label class="form-check-label" for="maleGender">Male</label>
                                </div>

                                <div class="form-check form-check-inline">
                                    <input
                                    style={{border:"1px solid green"}} class="form-check-input" type="radio" name="Gender" id="otherGender"
                                        value="Other" onChange={e => { setData({ ...data, gender: e.target.value }) }} />
                                    <label class="form-check-label" for="otherGender">Other</label>
                                </div>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-4 pb-2">

                                <div data-mdb-input-init class="form-outline">
                                    <input
                                    style={{border:"1px solid green"}} type="email" id="emailAddress" class="form-control form-control-lg" placeholder="Email" onChange={e => { setData({ ...data, email: e.target.value }) }} />
                                    <label class="form-label" for="emailAddress">Email</label>
                                </div>

                            </div>
                            <div class="col-md-6 mb-4 pb-2">

                                <div data-mdb-input-init class="form-outline">
                                    <input
                                    style={{border:"1px solid green"}} type="tel" id="phoneNumber" class="form-control form-control-lg" placeholder="Phone Number" onChange={e => { setData({ ...data, phoneNumber: e.target.value }) }} />
                                    <label class="form-label" for="phoneNumber">Phone Number</label>
                                </div>

                            </div>
                        </div>

                        {/* <div class="row">
                                        <div class="col-12">
                                        
                                        <select class="select form-control-lg">
                                                <option value="1" disabled>Choose option</option>
                                                <option value="2">Subject 1</option>
                                                <option value="3">Subject 2</option>
                                                <option value="4">Subject 3</option>
                                                </select>
                                                <label class="form-label select-label">Choose option</label>

                                        </div>
                                    </div> */}

                        <div class="pt-2 d-flex align-items-center justify-content-center">
                            <input
                            style={{border:"1px solid green"}} data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" type="submit" value="Submit" />
                        </div>

                    </form>
            </div>
            <ToastContainer />
        </Sidenav>
    )

}
export default Addcontact