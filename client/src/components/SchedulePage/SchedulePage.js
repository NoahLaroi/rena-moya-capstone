import axios from 'axios'
import React, { Component } from 'react'
import './schedulePage.scss'
const URL = 'http://localhost:8080/appointments'

export default class SchedulePage extends Component {
    state = {
    name: '',
    phone: '',
    date: '',
    time: '',
    description: '',
    availableTimes: [
      '9:00AM',
      '10:00AM',
      '11:00AM',
      '1:00PM',
      '2:00PM',
      '3:00PM',
      '4:00PM'
    ],
    errors: {}
    }
    componentDidMount() {
        axios.get(URL)
        .then(function (response) {
          console.log(response.data[0]);
          // this.setState({
          //   name: response.data.name[0] 
          // })
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    sendAMessage =()=> {
      
    }
    formValidation =()=> {
      const {name, phone, date, time, description} = this.state;
      let isValid = true;
      const specialCharacters = ['/', "/",'[', ']','!', '@', '#', '$', '%', '^', '&', '*', '()', '_', '+', "<", ">", "{", "}"];
      const errors = {};
      if (name.length < 1) {
        errors.name = '*Please enter at least 2 characters for your name';
        isValid = false;
      }
      if(name.includes(specialCharacters)) {
        errors.characters = '*Your name cannot include any special characters';
        isValid = false;
      }
      if (
          phone.length < 9
      ) { 
       errors.phone = '*Please enter a valid number!';
      }
      if (!date){
      errors.date = '*Please select a date.'
      isValid = false;
      }
      if (!time){
        errors.time = '*Please select an available time.'
        isValid = false;
        }
        if (description.trim().length < 10) {
          errors.nameLength = '*The description field must be filled out.';
          isValid = false;
        }
        this.setState({errors});
        return isValid;
    }
    submitAppointment =(event)=> {
      event.preventDefault();
      const isValid = this.formValidation();
      
      if (isValid) { 
        setTimeout(
          () => alert(`Thank you ${this.state.name}! Your appointment has been scheduled for ${this.state.date} at ${this.state.time}!`),
          500
        );
        axios.post( URL, {
        name: this.state.name,
        phone: this.state.phone,
        date: this.state.date,
        time: this.state.time,
        description: this.state.description
      })
      .then(function (response) {
        return response.JSON()
      }) 
      .catch(function (error) {
        // console.log(error);
      });
      // setTimeout ( ()=> window.location.replace("/"), 2000);
    }

    
    }
  
    render() {
      const {name, phone, date, time, description, errors} = this.state
      console.log(this.state.time)
        return (
            <section className='schedulePage'>
                <section className='scheduleSection'>
                <h1 className='header'> Schedule</h1>
                <form className='scheduleForm'>
                    <label>Name</label>
                    <input className='textInput nameInput' name= 'name' type='text' placeholder='What is your name?'
                      onChange={(event) => {
                      this.setState({name: event.target.value});
                    }}/>
                    <label>Phone Number</label>
                    <input className='textInput phoneNumberInput' name='phone number' type='text'
                    placeholder='What is your phone number?'
                     onChange={(event) => {
                      this.setState({phone:event.target.value });
                    }}  
                    />
                    <label>Date</label>
                    <input className='textInput dateInput' name='date' type= 'date'
                   onChange={(event) => {
                      this.setState({date: event.target.value});
                    }}  
                    />
                    <label>Time</label>
                    {/* this.state.time.map will throw an error; time is not an array */}
                    <select className='textInput timeInput' name='time'
                      onChange={(event)=>{this.setState({time: event.target.value})}}
                      >
                        {this.state.availableTimes.map((time)=> {
                        return <option value={time}>{time}</option>
                      })};
                    </select>
                    <label>Description</label>
                    <textarea type='text' className= 'textInput description' placeholder='What do you want done?'
                     onChange={(event) => {
                      this.setState({description: event.target.value});
                    }}  
                    ></textarea>
                    <div className='buttonContainer'>
                    <button className ='submitButton'type='submit' onClick={this.submitAppointment}>Submit</button>
                    </div>
                </form>
                {Object.keys(errors).map((key)=> {
                      return <div  className = 'errorBox'>
                      <p className='errors' key={key}>{errors[key]}</p>
                      </div>
                    })}
                </section>
            </section>
        )
    }
}
