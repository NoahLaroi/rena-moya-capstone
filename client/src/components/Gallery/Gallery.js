import {React, Component} from "react"
import './gallery.scss'
import imageOne from '../../assets/images/galleryImages/image1.png'
import imageTwo from '../../assets/images/galleryImages/image2.png'
import imageThree from '../../assets/images/galleryImages/image3.png'
import imageFour from '../../assets/images/galleryImages/image4.png'
import imageFive from '../../assets/images/galleryImages/image5.png'
import imageSix from '../../assets/images/galleryImages/image6.png'
import imageSeven from '../../assets/images/galleryImages/image7.png'
import imageEight from '../../assets/images/galleryImages/image8.png'
import imageNine from '../../assets/images/galleryImages/image9.png'

export default class Gallery extends Component {
  state = {
    pictures: [
      imageOne,
      imageTwo,
      imageThree,
      imageFour,
      imageFive,
      imageSix,
      imageSeven,
      imageEight,
      imageNine
    ],
    description: [
      'Passion Twist',
      'Passion Twist',
      'Knotless Braids with curly ends',
      'Bohemian Knotless Braids',
      'Bohemian Knotless Braids',
      'Bohemian Knotless Braids',
      'Knotless Braids',
      'Smedium Knotless Braids',
      'Bohemian Knotless Braids',
    ]
  }
  render () {  

  return (
        <section className='gallerySection'>
        <h1>Gallery</h1>
        {this.state.pictures.map((image, index)=> {
          const description = this.state.description[index]
          return (
            <div className='hairPhoto' alt='hair sample' style={{backgroundImage: `url(${image})`}}>
            <div className='styleDescription'>
              <h2>{description}</h2>
            </div>
            </div>          
            )
        })}
        </section>
    )
    }
} 