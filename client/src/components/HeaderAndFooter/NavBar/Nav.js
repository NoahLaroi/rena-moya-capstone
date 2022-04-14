import React from "react";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";
export default function Nav() {

  return (
    <nav>
      <div className="navLeft">
        <div className="logoContainer">
          <Link to='/'><h1 className="logo">Rena Moya</h1></Link>
          {/* <h2 className="subLogo">Hair Studio</h2> */}
        </div>
      </div>
      <div className='navRight'>
      <Hamburger/>
      </div>
    </nav>
  );
}
