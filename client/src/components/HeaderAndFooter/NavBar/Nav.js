import React from "react";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";
import logo from '../../../assets/images/mainLogo.PNG'
export default function Nav() {

  return (
    <nav>
      <div className="navLeft">
        <div className="logoContainer">
          <Link to='/'><h1 className="logo">RENA MOYA</h1></Link>
          <h4 className='subLogo'>HAIR STUDIO</h4>
        </div>
      </div>
      <div className='navRight'>
      <Hamburger/>
      </div>
    </nav>
  );
}
