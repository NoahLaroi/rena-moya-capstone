import instagram from '../../../assets/images/Instagram-Icon.svg'
import { Link } from 'react-router-dom'
export default function Footer () {
    return (
<section className='pageFooter'>
<div className='footerInfo'>
<h2>Hours</h2>
<p>Monday - Saturday</p>
<p>9am - 5pm</p>
<p className='closed'>Sunday - CLOSED</p>
<h2>Text</h2>
<p>(754) 308-9189</p>
</div>
<div className='social'>
<h2 className='socialHeader'>Connect</h2>
<div className='socialContainer'>
<a href='https://www.instagram.com/renamoyahairstudio'><img className='instagram' src={instagram} alt='instagramIcon'/></a>
</div>
</div>
</section>
    )
}