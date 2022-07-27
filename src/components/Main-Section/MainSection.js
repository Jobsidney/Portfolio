import React from 'react'
import About from '../About/About'
import Contacts from '../Contacts/Contacts'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import Services from '../Services/Services'
import HireBtn from './HireBtn'
import {Route, Routes,Link} from "react-router-dom";

function MainSection() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contacts' element={<Contacts/>}/>

      </Routes>
     
        
        
        
        
    </div>
    
  )
}

export default MainSection