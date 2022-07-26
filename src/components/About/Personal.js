import React from 'react'
import HireBtn from '../Main-Section/HireBtn'
import Skills from './Skills'

function Personal() {

    function Item({icon,title,description,descr2,sup}){
        return(
            <div class="info-item padd-15">
                <p><i class={"fa fa-"+icon}></i> {title} : <span>{descr2}<sup>{sup}</sup>{description}</span></p>
            </div>
        )
    }
  return (
    <div className='row'>
         <div className="about-content padd-15">
            <div className="row">
                <div className="about-text padd-15">
                    <h3>I'm a <span>Web Developer</span> and <span>Mobile App Developer</span>(<span>iOS & android</span>)</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
            </div>
            <div class="row">
                <div class="personal-info padd-15">
                    <div class="row">
                            {<Item icon="birthday-cake" description='September, 2000' title='BirthDay'descr2='9' sup='th'/>}
                            {<Item icon="male" description='21' title='Age' />}
                            {<Item icon="graduation-cap" description='Computer Science' title='Degree' />}
                            {<Item icon="chart-line" description='Software Engineering' title='Major' />}
                            {<Item icon="envelope" description='jobsidney67@gmail.com' title='Email' />}
                            {<Item icon="phone" description='+254-745-929-089' title='Phone' />}
                            
                            {<Item icon="padd-15" description='Nairobi, Kenya' title='Address' />}
                    
                            </div>
                            <div class="row">
                                {<HireBtn words='DOWNLOAD CV'/>}
                            </div>
                        </div>
                       <Skills/>
            </div>
         </div>

    </div>
  )
}

export default Personal