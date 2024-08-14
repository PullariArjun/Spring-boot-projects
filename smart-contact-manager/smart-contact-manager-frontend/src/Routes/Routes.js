import Addcontact from "../Components/AddContact";
import Dashboard from "../Components/Dashboard";
import EditContact from "../Components/EditContact";
import Login from "../Components/Login";
import Showcontact from "../Components/ShowContacts";
import SignUp from "../Components/SignUp";

const arr = [
    { element: <Login />, path: '/login' },
    { element :<SignUp/>, path:'/signup'},
    { element: <Dashboard />, path:'/dashboard'},
    {element: <Addcontact/>, path:'/add-contact'},
    {element:<Showcontact/>, path:'/show-contact'},
    {element:<EditContact/>, path:'/edit-contact/:id'}
];

export default arr;
