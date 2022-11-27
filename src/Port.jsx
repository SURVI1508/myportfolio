import React from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Latestwork from './components/Latestwork'
import Service from './components/Service'
import Skills from './components/Skills'

const Port = () => {
  return (
    <div>
        <Home/>
        <Skills/>
        <Service/>
        <Latestwork/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Port