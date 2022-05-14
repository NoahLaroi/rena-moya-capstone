function AreYouSure () {
    return (
        <div className='areYouSure'>
        <h2>Are You Sure You Want to Delete This Appointment?</h2>
        <button className='yesButton' 
        // onClick={props.deleteAppointment()}
        >Yes</button>
        <button onClick={()=> this.setState({invisible: true})} className='noButton'>No</button>
        </div>
    )
}