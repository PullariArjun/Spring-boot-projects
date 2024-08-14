// import { Link } from "react-router-dom"
// import CustomNavbar from "./Navbar"
import { useState } from 'react'
import '../App.css'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'
const SignUp = () => {

    const [conformpassword, setConformPassword] = useState('')
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: 'Female',
        email: '',
        phoneNumber: '',
        password: ''

    });

    // const location = useLocation()

    const notify = (msg) => toast(msg);
    const HandleSubmit = async (e) => {
        e.preventDefault();

        if (data.phoneNumber.length !== 10) {
            notify("Enter a Valid Phone Number")
            return;
        }

        if (conformpassword !== data.password) {
            notify("Password mismatch")
            return;
        }

        // console.log(data);
        await axios.post('http://localhost:8080/postUser', data)
            .then(toast("Data Added successfully"))

    }
    return (
        <section class="vh-100 gradient-custom">
            <ToastContainer />
            <div class="container py-5 h-100">
                <div class="row justify-content-center align-items-center h-100">
                    <div class="col-12 col-lg-9 col-xl-7">
                        <div class="card shadow-2-strong bg-primary card-registration" style={{ borderRadius: "15px" }}>
                            <div class="card-body p-md-4">
                                <div className="d-flex align-items-center justify-content-center">

                                    <h3 class="fw-bold mb-2 text-white text-uppercase ">Registration Form</h3>
                                </div>
                                <form onSubmit={HandleSubmit}>

                                    <div class="row">
                                        <div class="col-md-6 mb-4">

                                            <div data-mdb-input-init class="form-outline">
                                                <input type="text" id="firstName" required class="form-control form-control-lg" placeholder="First Name" onChange={(e) => { setData({ ...data, firstName: e.target.value }) }} />
                                                <label class="form-label" for="firstName">First Name</label>
                                            </div>

                                        </div>
                                        <div class="col-md-6 mb-4">

                                            <div data-mdb-input-init class="form-outline">
                                                <input type="text" id="lastName" required class="form-control form-control-lg" placeholder="Last Name" onChange={(e) => { setData({ ...data, lastName: e.target.value }) }} />
                                                <label class="form-label" for="lastName">Last Name</label>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6 mb-4 d-flex align-items-center">

                                            <div data-mdb-input-init class="form-outline datepicker w-100">
                                                <input type="date" required class="form-control form-control-lg" id="birthdayDate" placeholder="Birth Day" onChange={(e) => { setData({ ...data, dateOfBirth: e.target.value }) }} />
                                                <label for="birthdayDate" class="form-label">Birthday</label>
                                            </div>

                                        </div>
                                        <div class="col-md-6 mb-4">

                                            <h6 class="mb-2 pb-1">Gender: </h6>

                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="Gender" id="femaleGender"
                                                    value="Female" checked onChange={(e) => { setData({ ...data, gender: e.target.value }) }} />
                                                <label class="form-check-label" for="femaleGender">Female</label>
                                            </div>

                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="Gender" id="maleGender"
                                                    value="Male" onChange={(e) => { setData({ ...data, gender: e.target.value }) }} />
                                                <label class="form-check-label" for="maleGender">Male</label>
                                            </div>

                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="Gender" id="otherGender"
                                                    value="Other" onChange={(e) => { setData({ ...data, gender: e.target.value }) }} />
                                                <label class="form-check-label" for="otherGender">Other</label>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6 mb-4 pb-2">

                                            <div data-mdb-input-init class="form-outline">
                                                <input required type="email" id="emailAddress" class="form-control form-control-lg" placeholder="Email" onChange={(e) => { setData({ ...data, email: e.target.value }) }} />
                                                <label class="form-label" for="emailAddress">Email</label>
                                            </div>

                                        </div>
                                        <div class="col-md-6 mb-4 pb-2">

                                            <div data-mdb-input-init class="form-outline">
                                                <input required type="tel" id="phoneNumber" class="form-control form-control-lg" placeholder="Phone Number" onChange={(e) => { setData({ ...data, phoneNumber: e.target.value }) }} />
                                                <label class="form-label" for="phoneNumber">Phone Number</label>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div class="col-md-6 pb-2">

                                            <div data-mdb-input-init class="form-outline">
                                                <input required type="password" id="Password" class="form-control form-control-lg" placeholder="Password" onChange={(e) => { setData({ ...data, password: e.target.value }) }} />
                                                <label class="form-label" for="password">Password</label>
                                            </div>

                                        </div>

                                        <div class="col-md-6 pb-2">

                                            <div data-mdb-input-init class="form-outline">
                                                <input type="password" id="conformpassword" class="form-control form-control-lg" placeholder="Conform password" onChange={e => { setConformPassword(e.target.value) }} />
                                                <label required class="form-label" for="conformpassword">Conform password</label>
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
                                        <input data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" type="submit" value="Submit" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <p className="mb-0">I have an account? <a href="/login" className="text-white-50 fw-bold">Login</a></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default SignUp