import axios from 'axios'
import React, { Component } from 'react'
import './schedulePage.scss'
import caret from '../../assets/images/caret-down-512.webp'
export default class SchedulePage extends Component {
    state = {
    name: '',
    phone: '',
    date: '',
    time: '',
    description: '',
    timeSlots: [  
      
    ],
    invisible: true,
    makeTimesVisible: () => {
        this.setState({invisible: !this.state.invisible})
      },
    errors: {},
    currentDate: new Date().toLocaleDateString()
    }

    componentDidMount () {
     this.getTimeSlots()
     console.log('mounted')
     this.setState({description: 'hello'})
    }
    getTimeSlots =()=> {
      const timesURL = 'http://localhost:8080/timeSlots'
      axios.get(timesURL)
      .then( (response)=> {
        let times = response.data
        console.log(response);
        this.setState({
          timeSlots: times
        })
      })
      .catch(function (error) {
        // console.log(error);
      });
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
          () => alert(`Thank you ${this.state.name}! Your appointment for ${this.state.date} at ${this.state.time}! has been sent in for review. We will get back to you to confirm our availability via text message.`),
          500
        );
        axios.post('http://localhost:8080/appointments', {
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
        console.log(error);
      });
      setTimeout ( ()=> window.location.replace("/"), 2000);
    }

    
    }
  
    render() {
      const {name, phone, date, time, description, errors} = this.state
      
      // console.log(this.state.timeSlots)
      const timesList = <ul className='timesList'>
      {this.state.timeSlots.map((time)=> {
      return <li  onClick={(event)=>{
        console.log(event.target.innerHTML)
        this.setState({time: event.target.innerHTML, invisible: true})
        }} value={time}>{time}</li>
    })}
    </ul>
    // console.log(this.state.time)
        return (
            <section className='schedulePage'>
                <section className='scheduleSection'>
                <h1 className='header'> Schedule</h1>
                <h2 className='scheduleDate'>Today is: {this.state.currentDate}</h2>
                <form className='scheduleForm'>
                <div className='scheduleDivider'>
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
                  </div>
                  <div className='scheduleDivider'>
                    <label>Time</label>
                    <span className='selectedTime' name='time'onClick={()=>this.state.makeTimesVisible()}>
                      <p>{this.state.time}</p>
                      <img  className='caret' src={caret}/>
                    </span>
                    {/* Times List */}
                    {!this.state.invisible ? timesList : null}
                    <label>Description</label>
                    <textarea type='text' className= 'textInput description' placeholder='What do you want done?'
                     onChange={(event) => {
                      this.setState({description: event.target.value});
                    }}  
                    ></textarea>
                    <div className='buttonContainer'>
                    <button className ='submitButton'type='submit' onClick={this.submitAppointment}>Submit</button>
                    </div>
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
