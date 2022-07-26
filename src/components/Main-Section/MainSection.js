import React from 'react'
import About from '../About/About'
import Contacts from '../Contacts/Contacts'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import Services from '../Services/Services'
import HireBtn from './HireBtn'

function MainSection() {
  return (
    <div>
        <Home/>
        <About/>
        <Services/>
        <Projects/>
        <Contacts/>
    </div>
    
  )
}

export default MainSection