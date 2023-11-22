import React from 'react'
import './hero.css'
import Pause from '../../assets/eye-close.png';
import Play from '../../assets/eye-open.png'
import Button from '../../assets/success.png'

const Hero = ({setPlayStatus,heroData,heroCount,setHeroCount,playStatus}) => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>
        <div className="hero-explore">
            <p>Explore the Features</p>
            <img src={Button} width={20} alt="" />
        </div>
    </div>
  )
}

export default Hero