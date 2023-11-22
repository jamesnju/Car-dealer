import React, { useState } from 'react'
import Backgroup from './components/Background/Backgroup';
import Header from './components/Navbar/Header';
import Hero from './components/Hero/Hero';

const App = () => {
  let heroData = [
    {text1: "Dive into ", text2: " What you Love"},
    {text1: "Indulge", text2: "Your passion"},
    {text1: "Give in to", text2: " your passion"},
  ]
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);
  return (
    <div>
      <Backgroup playStatus={playStatus}  heroCount={heroCount}/>
      <Header/>
      <Hero 
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App