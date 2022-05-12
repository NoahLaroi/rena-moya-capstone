import { Link } from "react-router-dom"
export default function BigScreenLandingPage () {
    return (
        <>
        <div className="bigHero"></div>
        <div className="bigSchedulerContainer">
        <div className='bigScheduler'>
        <p>Schedule an Appointment</p>
        <Link to='schedule'><button className='scheduleNowButton'>Schedule Now</button></Link>
        </div>
        </div>
        <div className='bigPicture bigPictureOne' alt='picture1'></div>
        <div className='bigPicture bigPictureTwo' alt='picture2'></div>
        </>
    )
}