import React, {useEffect ,useState} from "react";
import { Link, useLocation} from "react-router-dom";
import  "./Header.css";

const Header =() => {
    const [activeTab,setActiveTab] = useState("");
    const location = useLocation();
    useEffect(() =>{
        if(location.pathname === "/") {
            setActiveTab("Home")
        }else if(location.pathname === "/add "){
            setActiveTab("AddContact")
        }
        else if(location.pathname === "/about"){
            setActiveTab("about")
        }

    }, [location]);
    return(
        <div className="header">
            <div className="logo">Contact App </div> 
            <div className="header-right">
                <Link to="/">
                    <p className={`${activeTab ==="Home" ? "active" :" "}`}
                    onClick= {() => setActiveTab("Home")}>
                        Home
                    </p>
                </Link> 
                <Link to="/">
                    <p className={`${activeTab ==="AddContact" ? "active" :" "}`}
                    onClick= {() => setActiveTab("AddContact")}>
                        Add Contact
                    </p>
                </Link> 
                <Link to="/">
                    <p className={`${activeTab ==="About" ? "active" :" "}`}
                    onClick= {() => setActiveTab("About")}>
                       About
                    </p>
                </Link> 


            </div>

        </div>
    )
}
export default Header