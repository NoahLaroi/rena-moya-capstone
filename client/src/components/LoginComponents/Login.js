import React, { Component } from 'react'
import axios from 'axios'
import './login.scss'
export default class Login extends Component {
    state = {
        superSuperSecret: 'tsa%A6@-hU',
        isLoggedIn: false,
        isLoginError: false,
        errorMessage: "",
    }
    componentDidMount() {
        axios.get('http://localhost:8080/')
        .then(function (response) {
        //   console.log(response);
        })
        .catch(function (error) {
        //   console.log(error);
        });
    }
    sumbitHandler=(event)=> {
    event.preventDefault();
    if (this.state.password === this.state.superSuperSecret) {
        window.location.replace('/appointment-page'); 
        alert('Welcome Serena! Here are your appointments for today');

    }
        else {
        alert('Wrong Password! You are not authorized!')
        window.location.replace('/');
        };
       
    }
    render() {
    // console.log(this.state.password)
        return (
            <section className='loginSection'>
            <h1>Log In</h1>
            <form className='loginForm'>
                <label>Password</label>
                <input type='password' className='loginInputs password'
                name='password'  onChange={(event) => {
                      this.setState({ password: event.target.value });
                    }}  
                />
            <button className='loginButton' onClick={this.sumbitHandler}>Log In</button>
            </form>
            </section>
        )
    }
}
