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
      <ul className='navOptions'>
        <Link to='/aboutme'><li>About Me</li></Link>
        <a href='www.instagram.com/renamoyahairstudio'><li>Gallery</li></a>
        <Link to='/policies'><li>Policies</li></Link>
        <Link to='/schedule'><li>Schedule</li></Link>
        <Link to='/admin-login'><li>Admin Login</li></Link>
      </ul>
      <Hamburger/>
      </div>
    </nav>
  );
}
