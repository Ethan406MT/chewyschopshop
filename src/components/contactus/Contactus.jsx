import React from "react";
import './contactus.css';
import Mapphoto from "../../assets/Screenshot_18.png"

const Contactus = () => {
    return (
        <body>

        
        <section className="ccs__CU">
                <div className="ccs__CU-container">
                <img className="maphoto" src={Mapphoto} alt = {"mphoto"}   />
                <h1>Located in the Bar triangle by Brothel Bikes and Drew's Tattoo Shop</h1>
                <div className="contactusbox">  
                <h2>(123)-456-7890</h2>
                <h3>email@chewyschopshop.com</h3>
                <h3> 123 Address, Big Sky MT 59716 </h3>
                </div>
                </div>
                
        </section>
        </body>
    )
}
export default Contactus