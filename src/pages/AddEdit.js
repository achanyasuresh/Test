import React, {useState, useEffect}  from "react";
import {useHistory, useParams} from "react-router-dom"
import "./AddEdit.css"
import fireDb from "../firebase";
import {toast} from "react-toastify";

const initialState  = {
    name : "",
    email :"",
    contact :""
};

const AddEdit = () => {
    const [state, setState] =useState(initialState);
    const[data, setData] = useState({});
    const { name,email,contact} = state;
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !contact) {
            toast.error("please enter the field value");
        }
        else{
            fireDb.child("contacts").push(state, (err) => {
                if(err)
                {
                    toast.error(err);

                }
                else{
                    toast.success("contact added successfully");
                }
            });
            setTimeout(() => history.push("/"),500);
        }

    };
    const handleInputChange = (e) =>{
        const {name , value} = e.target;
        setState({...state, [name]:value}); 
        
    }
    return(
        <div style={{marginTop:"100px"}}>
            <form style={{
                margin: "auto",
                padding: "15px",
                maxwidth: "200pz",
                alignContent: "center"
            }}
            onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                type="text"
                id="name"
                name= "name"
                placeholder="your name"
                value={name}
                onChange={handleInputChange}
                />
                 <label htmlFor="email">Email</label>
                <input 
                type="text"
                id="email"
                name= "email"
                placeholder="your email"
                value={email}
                onChange={handleInputChange}
                />
                 <label htmlFor="contact">contact</label>
                <input 
                type="number"
                id="contact"
                name= "contact"
                placeholder="your contact"
                value={contact}
                onChange={handleInputChange}
                />
                <input
                type="submit"
                value="save"
                />
            </form>
        </div>
    )
}
export default AddEdit