import React, { Component } from 'react'
import axios from 'axios'
import './login.scss'
const URL = 'http://localhost:8080/appointments'

export default class Appointments extends Component {
    state = {
        currentDate: new Date().toLocaleDateString(),
        customer: '',
        id: '',
        phone: '',
        date: '',
        time: [],
        description: '',
    }
    componentDidMount() {
        axios.get(URL)
        .then((response) => {
          console.log(response.data[0].customer)
          this.setState({customer: response.data[0].customer})
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    render() {
        return (
            <section className='appointmentsSection'>
            <h1>Here are your appointments for {this.state.currentDate}</h1>
            <input type = 'date' className='calendarDate' onChange={(event) => {
                      this.setState({currentDate: event.target.value});
                    }} />
            {/* Map through the data and display it here. Make sure that the data being displayed matches that of the current date */}
            <section className='contentContainer'>
            <div className='appointmentContainer'>
            <label>Customer</label>
            {/* {this.state.customer.map((name)=> {
                        return <p value={name}>{name}</p>
                      })}; */}
            <label>ID</label>
            <p>{this.state.id}</p>
            <label>Phone</label>
            <p>{this.state.phone}</p>
            <label>Date</label>
            <p>{this.state.date}</p>
            <label>Time</label>
            <p>{this.state.time}</p>
            <label>Description</label>
            <p>{this.state.description}</p>
            <button className='cancelButton'> Cancel</button>
            </div>
            </section>
            </section>
        )
    }
}
