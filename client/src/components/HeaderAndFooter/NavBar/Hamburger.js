import {React, Component} from "react"
import { Link } from "react-router-dom";

export default class Hamburger extends Component {
   state = {
    invisible: true,
    makeNavVisible: () => {
        this.setState({invisible: !this.state.invisible})
      }
   }
   
    render () {
    const navElements = 
    <div className="navElements">
        <ul className="navMenu" name='navMenu'>
          <Link to='/aboutme'><li className="listElement about">About Me</li></Link>
          <Link to='/gallery'><li className="listElement gallery">Gallery</li></Link>
          <Link to='/policies'><li className='listElement policies'> Policies</li></Link>
          <Link to='/schedule'><li className="listElement schedule">Schedule</li></Link>
          <Link to='/admin-login'><li className='listElement adminLogin'>Admin Login</li></Link>
        </ul>
      </div>;
    
    return (
        <>  
        <div className="hamburger" name='hamburger' onClick={()=>this.state.makeNavVisible()}>
          <span></span>
          <span></span>
          <span></span>
        </div> 
       {!this.state.invisible ? navElements : null}
        </>
    )
    }
}