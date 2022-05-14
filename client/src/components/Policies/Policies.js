import './policies.scss'
import logo from '../../assets/images/mainLogo.PNG'
import { Link } from 'react-router-dom'
export default function Policies () {
    return (
        <section className='policiesSection'>
        <h1>Policies</h1>
        <h4>Thank you for choosing Rena Moya Hair Studio! 
            Please read thoroughly before booking! Can't wait to see you!</h4>
            <div className='policyContainer'>
            <p>
             1. Before coming to your appointment, your hair <b>MUST</b> be washed,
             product free and blow dried. Failure to do so will result in your 
             appointment being cancelled and deposit forfeited.   
            </p>
            <p>
             2. Hair should at least be 4 inches. If you are unsure about your length, 
             please DM a picture through <a href='https://www.instagram.com/renamoyahairstudio/'>Instagram</a>.   
            </p>
            <p>
             3. <b>A $30 DEPOSIT is REQURED for ALL APPOINTMENTS and it is NON REFUNDABLE.
             This can be paid through Zelle or Cashapp.</b>   
            </p>
            <p>
            4. Your remaining ballance can be paid through <b>Cash</b>, <b>Zelle</b>, or <b>Cashapp</b>.
            </p>
            <h3>LATE POLICY</h3>
            <ul>
               <li>You will have a grace period of 10 minutes. After 10 minutes, <b>there will be a charge of $15</b></li>
               <li>If you are more than 20 minutes late, I will do my best to accommodate you. If I am unabled to, your appointment will be cancelled.
               <b>A new deposit will be required when required when re-booking.</b>
               </li> 
            </ul>
            <h3>RESCHEDULING</h3>
            <ul>
                <li>If you have to reschedule, you must do so <b>48
                hours before your appointment</b> to kkep the same deposit.
                </li>
                <li>NO SHOW = BANNED</li>
                <li>I DO NOT PROVIDE THE BRAIDING HAIR</li>
            </ul>
            <h3>HOW TO BOOK</h3>
            <li>Please use the <Link to='/schedule'>Scheduling Page</Link>, 
            DM me through <a href='https://www.instagram.com/renamoyahairstudio'>Instagram</a>,
            or text (754) 308-9189 with your preferred style and date/time. I will get back with you as soon as
            possible.</li>
            <p>
             <b>Located in Coral Springs, FL.
             FULL ADDRESS WILL BE PROVIDED ONCE YOUR APPOINTMENT IS BOOKED. IF YOU HAVE ANY
             QUESTIONS, PLEASE TEXT (754) 308-9189
             </b>   
            </p>
            </div>
            <div className='policyLogoContainer'>
            {/* <img href={logo}/> */}
            </div>
        </section>
    )
}