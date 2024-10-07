import { useState } from 'react'

import './App.css'
import Slider from './components/slider.jsx'
import Header from './components/headernav.jsx'
import Homepage from './components/homepage.jsx'
import Welcome from './components/welcome.jsx'
import Cardssports from './components/cards.jsx'
import Footer from './components/footer.jsx'
import ExuseEffect from './components/ex-useeffect.jsx'

function App() {
  

  return (
    <>
    
    <Header/>
      {/* <Slider/> */}
      <Welcome/>
      <br/>
      <ExuseEffect/>
      {/* <Cardssports/> */}
      <br/>
      <Footer/>
      
    </>
  )
}

export default App
