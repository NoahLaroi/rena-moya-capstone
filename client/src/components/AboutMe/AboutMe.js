import './aboutMe.scss'
import { Component } from 'react'
export default function AboutMe () {
    return (
    <section className='aboutMePage'>
        <div className='aboutMePicture'></div>
    <div className='textContainer'>
      <h1 className='heading'>About Me</h1>
        <div className='aboutMeText'>
        My name is Serena Amoya Delfosse and I am a braider in Broward County Florida. My passion is hair and cosmology. 
        I specialize in braiding specifically. I have been doing hair for the last 3 years and have been able to build
        rapport with my community. I have become a factory for making satisfied customers since I started doing hair professionally. 
        My hope is to expand my business and my brand, as well as to make more satisfied customers. 
        <p>Sincerely,</p>
        <p>Serena Delfosse, CEO of Rena Moya Hair Studios</p>
    </div>
    </div>
    </section>
      )
}