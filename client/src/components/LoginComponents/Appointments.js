import React, { Component } from 'react'
import axios from 'axios'
import './appointments.scss'
import AreYouSure from './AreYouSure'
const URL = 'http://localhost:8080/appointments'
// Three Steps: 
//1. Set up a json of days on the backed with a timeslot for each day and an available object
//2. When someone sets up an appointment they can choose a timeslot 
//3. Save appointment and check the day and find the timeslot that was chosen and mark it as either available or unavailable.
//4. Front end, if time slot is available then render, if not then don't render. 

export default class Appointments extends Component {
    state = {
        currentDate: new Date().toISOString().split('T')[0],
        todaysAppointments: [],
        allAppointments: [],
        invisible: true,
        makePromptVisible: () => {
            this.setState({invisible: !this.state.invisible})
          } 
    }

    componentDidMount() {
        axios.get(URL)
        .then((response) => {
        // We get back a list of appointments here.
        const today = response.data.filter((appointments) =>
        {return appointments.date === this.state.currentDate}
        )
          this.setState(
            {allAppointments: response.data,
            todaysAppointments: today}  
        )
        })
        .catch(function (error) {
        //   console.log(error);
        });
    }
    renderAppointments =()=> {
        axios.get(URL)
        .then((response) => {
        // We get back a list of appointments here.
        const today = response.data.filter((appointments) =>
        {return appointments.date === this.state.currentDate}
        )
          this.setState(
            {allAppointments: response.data,
            todaysAppointments: today}  
        )
        })
        .catch(function (error) {
        //   console.log(error);
        });
    }
    changeAppointmentDate =(event)=> {
    this.setState({
    currentDate: event.target.value,
    todaysAppointments: this.state.allAppointments.filter((appointments) => { 
        // console.log(appointments.date)
        // console.log(event.target.value)
        return appointments.date === event.target.value})
    })
    // console.log('text updated')
    }

    deleteAppointment =(id)=> {
    axios
      .delete('http://localhost:8080/appointments/' + id)
      .then((success) => {
        this.renderAppointments();
      })
      .catch((error) => console.log(error));
    }
    render() {

    const areYouSure =(appointment)=> { 
    return (
    <div className='areYouSure'>
    <h2>Are You Sure You Want to Cancel This Appointment?</h2>
    <button className='yesButton' 
    // id={appointment.id} 
    onClick={(event)=>{this.deleteAppointment(event.target.id)}}
    >Yes</button>
    <button onClick={()=> this.setState({invisible: true})} className='noButton'>No</button>
    </div>
    )
    }
        // console.log(this.state.currentDate)
        return (
            <section className='appointmentsSection'>
            <h1 className='appointmentHeading'>Here are your appointments for: {this.state.currentDate}</h1>
            <input type = 'date' className='calendarDate' onChange={(event) => this.changeAppointmentDate(event)} />
            {/* Map through the array of appointments in state and display it here */}
            <section className='contentContainer'>
            {this.state.todaysAppointments.map((appointment) => {
                console.log(appointment.id)
                return <div className='appointmentContainer'
                id={appointment.id} >
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
                <button className='cancelButton' 
                onClick={()=>this.state.makePromptVisible()}
                >Cancel</button>
                {!this.state.invisible ? areYouSure() : null}
                </div>
            })}
            </section>
            </section>
        )
    }
}
