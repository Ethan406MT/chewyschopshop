import React from "react";
import './navbar.css';

const Navbar = () => {
    
    return (
        <div className ="ccs__navbar">
            <div className ="ccs__navbar-links">
            
        
            <div className="ccs__navbar-links_container" >
                <p><a href="#About" color="white"> About </a></p>
                <p><a href="#Gallery" color="white"> Gallery </a> </p>
                
                
            </div>
            </div>
            <div className ="ccs__navbar-links">
        
            <div className="ccs__navbar-links_container2">
                
                <p><a href="#Price"> Pricing </a></p>
                <p><a href="#ContactUs"> Contact Us </a></p>
                
            </div>
            </div>
            
        </div>
    )
}
export default Navbar;
