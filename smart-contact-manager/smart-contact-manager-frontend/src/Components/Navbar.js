// import { Button } from "bootstrap";
import { Button } from "bootstrap";
import { useState } from "react"
import { Link } from "react-router-dom";
import Toggler from "../Sources/Toggler/Toggler";

const Sidenav = ({ children, className}) => {

    const [visible, setVisble] = useState(true);
    return (
        <>

            <div
                className="bg-secondary"
                style={{ width: "100%", backgroundColor: "#62638f", height: "10vh" }}
                
            >
                <div className="container w-100 h-100 nav">
                    <div className="div">
                        <Link className="link">Home</Link>
                    </div>
                    <div className="div">
                        <Link className="link">About</Link>
                    </div>
                    <div className="div">
                        <Link className="link">Contact us</Link>
                    </div>
                    <div className="div">
                        <Link  to={"/login"} className="link" onClick={()=>{
                            localStorage.removeItem("email");
                            localStorage.removeItem("data")
                        }}>Logout</Link>
                    </div>
                </div>
            </div>
            {
                <div
                    className=""
                    style={{
                        width: visible ? '200px' : '50px',
                        height: '80vh',

                        transition: 'width 0.5s ease',
                        float: "left",
                        backgroundColor:"#62638f"
                    }}

                >
                    <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"end", height:"50px", backgroundColor:"#62638f"}}>
                        <Toggler state={visible} onChange = {()=>setVisble(!visible)}/>
                    </div>
                    {
                        visible && (
                            <div style={{width:"100%", backgroundColor:"#62638f", height:"100%"}}>
                                <Link className="a" to={"/dashboard"}>Dashboard</Link>
                                <Link className="a" to={"/add-contact"}>Add contact</Link>
                                <Link className="a" to={"/show-contact"} >Show contact</Link>
                            </div>
                        )
                    }
                </div>
            }
            <div
                className={className}
                style={{ float: "left", display: "flex", justifyContent: "start", alignItems: "start", height: "90vh", width: "calc(100% - 200px)" }}

            >
                {children}
            </div>
        </>
    )
}
export default Sidenav