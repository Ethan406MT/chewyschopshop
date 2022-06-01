import React from "react";
import './header.css';
import logo from '../../assets/Screenshot_4.png'

const Header = () => {
    return (

        <div className="ccs__header section__header section__padding">
        <div className="ccs__header-logo__container">
        <img src={logo} alt={"logo"} className="logo" />
        </div>
        <div className="css__header-name-container">
                <h1> Chewy's Chop Shop</h1>
                
            </div>
        </div>
    )
}
export default Header