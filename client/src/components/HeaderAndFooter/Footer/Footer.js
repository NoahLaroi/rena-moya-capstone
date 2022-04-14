import instagram from '../../../assets/images/Instagram-Icon.svg'
import { Link } from 'react-router-dom'
export default function Footer () {
    return (
<section className='pageFooter'>
<div className='hours'>
<h2>Hours</h2>
<p>Monday - Saturday</p>
<p>9am - 5pm</p>
<p className='closed'>Sunday - CLOSED</p>
<div>
<h2> Address</h2>
<p>8401 W Sample Rd Coral Springs FL 33065</p>
</div>
</div>
<div className='social'>
<h2 className='socialHeader'>Get Connected!</h2>
<div className='socialContainer'>
<a href='https://www.instagram.com/renamoyahairstudio'><img className='instagram' src={instagram} alt='instagramIcon'/></a>
</div>
</div>
</section>
    )
}