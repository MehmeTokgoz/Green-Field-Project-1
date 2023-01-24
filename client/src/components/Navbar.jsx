import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";

const Navbar = () => {
    //Getting user info from server
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const getUserInfo = async () => {
        try {
            const { data } = await axios.get("/api/users/user");
            setUser(data);
        } catch (error) {
            console.log(error);
        }
    };
//Signing out the user
    const handleSignOut = async () => {
        try {
            await axios.get("api/auth/signOut");
            setUser(null);
            toast.success("User signed out!");
            navigate("/auth");
        } catch (error) {
            console.log(error);
        }
    };
//Calling getUserInfo every time the page renders
    useEffect(() => {
        getUserInfo();
    }, []);

    if (!user) return;

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <p className="greeting">Welcome {user.name}</p>
                <p className="email">{user.email}</p>
            </div>
            <div className="navbar-logo">
                <img src={logo} style={{width:"200px"}} alt="The cookie monster Pac-Man" />
            </div>
            <div className="navbar-right">
                <button
                    className="signout"
                    type="button"
                    onClick={handleSignOut}
                >
                    Sign Out
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
