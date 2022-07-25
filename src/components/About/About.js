import React from 'react'
import Personal from './Personal'


function About() {
  return (
    <div className='about section'>
        <div className='container'>
        <div className="row">
            <div className="section-title padd-15">
                <h2>About me</h2>
                
            </div>
        </div>
        <Personal/>
        </div>
        
    </div>
  )
}

export default About