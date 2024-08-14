import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import { toast, ToastContainer } from 'react-toastify';
import Sidenav from './Navbar';

function Showcontact() {
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!localStorage.getItem("email")) {
            navigate("/login");
            window.location.reload();
            return;
        }
    }, [navigate]);

    const notify = msg => toast(msg)
    const HandleDelete = async (id) =>{
        const url = "http://localhost:8080/deleteContactByid/"+id;
        await axios.delete(url)
        .then(notify("Deleted Succsedfully"))
        window.location.reload()

    }

    const [data, setData] = useState([])

    

    React.useEffect(()=>{
        const fetchData = async () =>{
            const url = 'http://localhost:8080/getContacts/'+localStorage.getItem("email")
            const res = await axios.get(url)
            setData(res.data);

        }
        fetchData()
    },[])

    console.log(data);
    return (
        <Sidenav className="d-felx align-items-start justify-content-center">
            <Table>
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>DOB(YYYY-MM-DD)</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Gender</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {
                        data.map(e=>{
                            return(
                                <tr>
                                    <td>{e.firstName}</td>
                                    <td>{e.lastName}</td>
                                    <td>{e.dateOfBirth}</td>
                                    <td>{e.email}</td>
                                    <td>{e.phoneNumber}</td>
                                    <td>{e.gender}</td>
                                    <td><Link to={'/edit-contact/'+e.id} state={{contact:e}} ><Button>Edit</Button></Link></td>
                                    <td><Button onClick={() => HandleDelete(e.id)}>Delete</Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <ToastContainer/>
        </Sidenav>
    );
}

export default Showcontact;
