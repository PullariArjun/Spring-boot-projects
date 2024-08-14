// import CustomNavbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"
import Sidenav from './Navbar';

const Dashboard = ({ child }) => {
    const data = JSON.parse(localStorage.getItem("data"));
    return (

        <Sidenav classNameName="d-flex align-items-center justify-content-center border border-primary border-5">
            <div className="container" style={{ width: "100%", height:"90vh" }}>
                <div className="row">
                    <div className="col">
                        <nav aria-label="breadcrumb" className="bg-body-tertiary rounded-3 p-3 mb-4">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">User</a></li>
                                <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-4">
                            <div className="card-body text-center bg-primary">
                                <img src={data.gender === "Male" ? "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2.webp"} alt="avatar"
                                    className="rounded-circle img-fluid" style={{ width: "150px" }} />
                                <h5 className="my-3">{data.firstName + " " + data.lastName}</h5>
                                {/* <p className="text-muted mb-1">Full Stack Developer</p>
                                    <p className="text-muted mb-4">Bay Area, San Francisco, CA</p> */}
                                {/* <div className="d-flex justify-content-center mb-2">
                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary">Follow</button>
                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary ms-1">Message</button>
                                    </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card mb-4 bg-primary">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Full Name</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{data.firstName + " " + data.lastName}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Email</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{data.email}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Phone</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{data.phoneNumber}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Mobile</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{data.phoneNumber}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Gender</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{data.gender}</p>
                                    </div>
                                </div>
                                <hr />

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Sidenav>
    )
}
export default Dashboard;