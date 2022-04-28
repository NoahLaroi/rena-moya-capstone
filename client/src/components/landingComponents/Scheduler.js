import {Link} from 'react-router-dom'
export default function Scheduler () {
 return (
     <div className='schedulerContainer'>
     <div className="scheduler">
        <p>Schedule an Appointment</p>
        <Link to='schedule'><button className='scheduleNowButton'>Schedule Now</button></Link>
     </div>
    </div>
 )
}