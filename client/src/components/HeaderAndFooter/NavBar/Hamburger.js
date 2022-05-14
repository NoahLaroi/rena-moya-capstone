import {React, Component} from "react"
import { NavLink, Link } from "react-router-dom";

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
          <NavLink activeClassName='activeMobile' to='/aboutme' onClick={()=> {this.setState({invisible: true})}}><li className="listElement about">About Me</li></NavLink>
          <NavLink activeClassName='activeMobile' to='/gallery' onClick={()=> {this.setState({invisible: true})}}><li className="listElement gallery">Gallery</li></NavLink>
          <NavLink activeClassName='activeMobile' to='/policies' onClick={()=> {this.setState({invisible: true})}}><li className='listElement policies'> Policies</li></NavLink>
          <NavLink activeClassName='activeMobile' to='/schedule' onClick={()=> {this.setState({invisible: true})}}><li className="listElement schedule">Schedule</li></NavLink>
          <NavLink activeClassName='activeMobile' to='/admin-login'onClick={()=> {this.setState({invisible: true})}}><li className='listElement adminLogin'>Admin Login</li></NavLink>
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