import React from 'react'
import './Hero.css'
import Image from '../assets/images/hero.jpg'
function Hero() {
  return (
    <div className='hero-container'>
        <div className='hero-left'>
          <h1>CAPTURING MOMENTS</h1>
          <h1>THAT WILL LAST</h1>
          <h1>A LIFETIME</h1>
        </div>
        <div className='hero-right'>
          <img src={Image} alt="hero_image" />
        </div>
    </div>
  )
}

export default Hero