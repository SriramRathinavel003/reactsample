import React from "react";
import '../styles/navigation.css'
import { Link } from "react-router-dom";
function Navigation() {
    return (
        <div className="navbar-container">
            <ul>
                <div className="foot">
                    <img src="https://o.remove.bg/downloads/6697969b-a5e5-4403-ae8d-f6e4491fb8e1/o-logo-dna-icon-in-blue-colors-png_131008-removebg-preview.png" width={40} height={40} />
                    <Link to="/">Home</Link>
                    
                    <Link to="/Templates">Templates</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/About">About</Link>

                </div>

                <div className="foot">
                    <Link to="/Login">Sign / Login</Link>
                    
                </div>
            </ul>

        </div>

    )
}
export default Navigation;