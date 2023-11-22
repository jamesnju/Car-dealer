import React from 'react';
import './background.css';
import Image1 from '../../assets/car1.jpg';
import Image2 from '../../assets/car2.jpg';
import Image3 from '../../assets/car3.jpg';
import Image4 from '../../assets/car4.jpg';
import vida from '../../assets/videos/vida1.mp4';

const Backgroup = ({playStatus, heroCount}) => {
  if(playStatus){
    return(
        <video className='background' autoPlay loop muted>
            <source src={vida} type='video/mp4'/>
        </video>
    )
  }else if(heroCount ===0){
    return( <img className='background' src={Image1} alt="" /> )

  }else if(heroCount === 1){

    return <img className='background' src={Image2} alt="" />

  }else if(heroCount === 2){

    return <img className='background' src={Image3} alt="" />
  }
  else if(heroCount ===3){

    return <img className='background' src={Image4} alt="" />
  }
}

export default Backgroup