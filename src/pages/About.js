import React, {useEffect,useState} from "react";
import fireDb from "../firebase";
import {Link} from "react-router-dom";
import "./Home.css";


const About = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        console.log("inside effect")
        fireDb.child('contacts').on('value', snapshot => {
            console.log("inside db")

            if(snapshot.val() !== null) {  
                console.log("inside iffff") 
                setData({ ...snapshot.val() })
            } 
            else {
                setData({})
            }
        })
    }, []); 
    return(
        <div style={{marginTop: "100px"}}>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>
                            No
                        </th>
                        <th style={{textAlign: "center"}}>
                            Name
                        </th>
                        <th style={{textAlign: "center"}}>
                            Email
                        </th>
                        <th style={{textAlign: "center"}}>
                            Conatct
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((id, index ) => {
                        return (
                            <tr key={id}>
                                <th scope="row">{index+1}</th>
                                <td>{data[id].name}</td>
                                <td>{data[id].email}</td>
                                <td>{data[id].contact}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <h2>Welocme home</h2>
        </div>
    )
}
export default About