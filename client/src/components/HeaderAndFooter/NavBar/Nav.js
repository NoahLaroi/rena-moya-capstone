import React from "react";
import Hamburger from "./Hamburger";
import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/images/mainLogo.PNG'
export default function Nav() {

  return (
    <nav>
      <div className="navLeft">
        <div className="logoContainer">
          <Link 
          // activeClassName='active' 
          to='/'><h1 className="logo">RENA MOYA</h1></Link>
          <h4 className='subLogo'>HAIR STUDIO</h4>
        </div>
      </div>
      <div className='navRight'>
      <ul className='navOptions'>
        <NavLink activeClassName='active' to='/aboutme'><li>About Me</li></NavLink>
        <NavLink activeClassName='active' to='/gallery'><li>Gallery</li></NavLink>
        <NavLink activeClassName='active' to='/policies'><li>Policies</li></NavLink>
        <NavLink activeClassName='active' to='/schedule'><li>Schedule</li></NavLink>
        <NavLink activeClassName='active' to='/admin-login'><li>Admin Login</li></NavLink>
      </ul>
      <Hamburger/>
      </div>
    </nav>
  );
}
