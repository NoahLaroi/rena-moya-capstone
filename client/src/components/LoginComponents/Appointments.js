import React, { Component } from 'react'
import axios from 'axios'
import './login.scss'
const URL = 'http://localhost:8080/appointments'

export default class Appointments extends Component {
    state = {
        currentDate: new Date().toISOString().split('T')[0],
        todaysAppointments: []
    }

    componentDidMount() {
        axios.get(URL)
        .then((response) => {
        // We get back a list of appointments here.
          this.setState(
            {todaysAppointments: response.data}  
        )
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    // changeAppointmentData =()=> {
    // const todaysAppointments = this.state.todaysAppointments.filter((appointments) => { return appointments.date === this.state.currentDate});
    // this.setState({todaysAppointments: todaysAppointments})
    // }
    changeAppointmentDate =(event)=> {
    // const todaysAppointments = this.state.todaysAppointments.filter((appointments) => { return appointments.date === this.state.currentDate});
    this.setState({
    currentDate: event.target.value,
    todaysAppointments: this.state.todaysAppointments.filter((appointments) => { return appointments.date === event.target.value})})
    console.log(this.state.currentDate)
    }
    deleteAppointment =()=> {
    axios.delete(URL)
    }
    render() {
        return (
            <section className='appointmentsSection'>
            <h1 className='appointmentHeading'>Here are your appointments for: {this.state.currentDate}</h1>
            <input type = 'date' className='calendarDate' onChange={(event) => this.changeAppointmentDate(event)} />
            {/* Map through the array of appointments in state and display it here */}
            <section className='contentContainer'>
            {this.state.todaysAppointments.map((appointment) => {
                return <div className='appointmentContainer'>
                <label>Customer</label>
                <p>{appointment.name}</p> 
                <label>Customer ID</label>
                <p>{appointment.id}</p>
                <label>Phone Number</label>
                <p>{appointment.phone}</p>
                <label>Date</label>
                <p>{appointment.date}</p>
                <label>Time</label>
                <p>{appointment.time}</p>
                <label>Description</label>
                <p>{appointment.description}</p>
                <button className='cancelButton'> Cancel</button>
                </div>
            })}
            </section>
            </section>
        )
    }
}
