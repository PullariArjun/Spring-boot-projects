import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("email")) {
            navigate("/dashboard");
        }
    }, [navigate]);
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const [showalert, setShowalert] = useState(false)
    const notify = (msg) => toast(msg)
    const HandleSubmit = async (e) => {
        e.preventDefault()

        const res = await axios.get("http://localhost:8080/userByEmail/" + data.email)
        const resData = res.data;
        console.log(resData);
        console.log(data)
        if (!resData.email) {
            setShowalert(true)
        } else if (resData.password !== data.password) {
            setShowalert(true);
        } else {
            localStorage.setItem("email", resData.email)
            localStorage.setItem("data", JSON.stringify(resData));
            navigate('/dashboard');
            window.location.reload()
        }


    }
    return (
        <section className="100vh gradient-custom">
            <ToastContainer />
            {/* <CustomNavbar /> */}
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-primary text-white" style={{ borderRadius: "1rem" }}>
                            <form onSubmit={HandleSubmit}>
                                <div className="card-body p-5 text-center">

                                    <div className="mt-md-4 pb-5">

                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        {
                                            showalert &&
                                            <div className="alert alert-danger">Invalid UserName or Password</div>
                                        }
                                        <p className="text-white-50">Please enter your Email and password!</p>

                                        <div data-mdb-input-init className="form-outline form-white mb-4">
                                            <input type="email" required id="typeEmailX" className="form-control form-control-lg" placeholder='Enter Email' onChange={(e) => { setData({ ...data, email: e.target.value }) }} />
                                        </div>

                                        <div data-mdb-input-init className="form-outline form-white mb-4">
                                            <input type="password" required id="typePasswordX" placeholder='Enter Password' className="form-control form-control-lg" onChange={(e) => { setData({ ...data, password: e.target.value }) }} />
                                        </div>

                                        <p className="small pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                        <input className="btn btn-outline-light btn-lg px-5" type="submit" value="Login" />

                                        <div className="d-flex justify-content-center text-center mt-2 pt-1">
                                            <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                            <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                            <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                        </div>

                                    </div>

                                    <div>
                                        <p className="mb-0">Don't have an account? <a href="/signup" className="text-white-50 fw-bold">Sign Up</a></p>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Login;