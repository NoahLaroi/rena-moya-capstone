import { Component } from "react";
import axios from "axios";
import './appointments.scss'
export default class AppointmentData extends Component {
  
    state = {
        invisible: true,
        makePopUpVisible: (id) => {
          
            this.setState({invisible: !this.state.invisible})
          },
          makePopUpInvisible:  (id) => {
            
            this.setState({invisible: true})
          }
    }
    deleteAppointment =(id)=> {
        axios
          .delete(`http://localhost:8080/appointments/${id}`)
          .then((success) => {
            document.location.reload();
          })
          .catch((error) => console.log(error));
        }
  render() {
      
    // const invisibility = props.invisible;
    const areYouSure = (
      <div className="areYouSure">
        <h2>Are You Sure You Want to Cancel This Appointment?</h2>
        <button
          className="yesButton"
          onClick={(event) => {
            this.deleteAppointment(this.props.appointment.id);
          }}
        >
          Yes
        </button>
        <button
          onClick={() => this.state.makePopUpInvisible()}
          className="noButton"
        >
          No
        </button>
      </div>
    );
    const appointment = this.props.appointment;
    console.log(this.props);
    return (
      <div className="appointmentContainer">
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
        <p className='appointmentDescription'>{appointment.description}</p>
        <button
          className="cancelButton"
          id={appointment.id}
          // onClick={(event)=>{this.props.deleteAppointment(event.target.id)}}
          onClick={(event) => {
              console.log(event);
              this.state.makePopUpVisible(event.target.id)}}
        >
          Cancel
        </button>
        <button className='editButton'>
          Edit
        </button>
        {!this.state.invisible ? areYouSure : null}
      </div>
    );
  }
}
