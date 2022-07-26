import React from 'react'
import Titles from '../Card/Titles'
import Personal from './Personal'


function About() {
  return (
    <div className='about section'>
        <div className='container'>
        <div className="row">
            <Titles heading={'Abouts'}/>
        </div>
        <Personal/>
        </div>
        
    </div>
  )
}

export default About