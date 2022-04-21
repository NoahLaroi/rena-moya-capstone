import axios from 'axios'
import React, { Component } from 'react'
import './schedulePage.scss'
import {Redirect} from "react-router-dom"
export default class SchedulePage extends Component {
    state = {
    name: '',
    phone: '',
    date: '',
    time: [
      '9:00AM',
      '10:00AM',
      '11:00AM',
      '1:00PM',
      '2:00PM',
      '3:00PM',
      '4:00PM'
    ],
    description: '',
    // availableTimes: '', 
    }
    componentDidMount() {
        axios.get('http://localhost:8080')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    submitAppointment =(event)=> {
      setTimeout(
        () => alert(`Thank you ${this.state.name}! Your appointment has been scheduled for ${this.state.date} at ${this.state.time}!`),
        1000
      );
      axios.post('http://localhost:8080/', {
        name: this.state.name,
        phone: this.state.phone,
        date: this.state.date,
        time: this.state.time,
        description: this.state.description
      })
      .then(function (response) {
        console.log(response);
        return response.JSON()
      }) 
      .catch(function (error) {
        console.log(error);
      });
      event.preventDefault();
      setTimeout ( ()=> window.location.replace("/"), 3000);
    }
    render() {
        return (
            <section className='schedulePage'>
                <section className='scheduleSection'>
                <h1 className='header'> Schedule</h1>
                <form className='scheduleForm'>
                    <label>Name</label>
                    <input className='textInput nameInput' name= 'name' type='text' placeholder='What is your name?'
                      onChange={(event) => {
                      this.setState({ name: event.target.value });
                    }}/>
                    <label>Phone Number</label>
                    <input className='textInput phoneNumberInput' name='phone number' type='text'
                    placeholder='What is your phone number?'
                     onChange={(event) => {
                      this.setState({ phone: event.target.value });
                    }}  
                    />
                    <label>Date</label>
                    <input className='textInput dateInput' name='date' type= 'date'
                   onChange={(event) => {
                      this.setState({ date: event.target.value });
                    }}  
                    />
                    <label>Time</label>
                    {/* this.state.time.map will throw an error; time is not an array */}
                    <select className='textInput timeInput' name='time'
                      onChange={(event)=>{this.setState({time: event.target.value})}}
                      >
                        {this.state.time.map((time)=> {
                        return <option value={time}>{time}</option>
                      })};
                    </select>
                    <label>Description</label>
                    <textarea type='text' className= 'textInput description' placeholder='What do you want done?'
                     onChange={(event) => {
                      this.setState({ description: event.target.value });
                    }}  
                    ></textarea>
                    <div className='buttonContainer'>
                    <button className ='submitButton'type='submit' onClick={this.submitAppointment}>Submit</button>
                    </div>
                </form>
                </section>
            </section>
        )
    }
}
