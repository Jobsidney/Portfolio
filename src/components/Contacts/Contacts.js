import React from 'react'
import Titles from '../Card/Titles'
import ContactForm from './ContactForm'

function Contacts() {
// find how to refactor 
    function SocialMediaIcon({icon,link}){
        return(
            <div className="socialMedia padd-15">
                <div className="icon">
                    <a href={link} className={"fa fa-"+icon}></a>
                 </div>
            </div>
        )
    }
  return (
    <section className=" section ">
    <div className="container">
    <Titles heading={'Contacts'}/>
    <div className="row row2">
        <SocialMediaIcon icon={'twitter'} link={'https://twitter.com/jovy_grey'}/>
        <SocialMediaIcon icon={'github'} link={'https://github.com/Jobsidney'}/>
        <SocialMediaIcon icon={'linkedin'} link={'https://www.linkedin.com/in/job-sidney-65a435203/'}/>
        <SocialMediaIcon icon={'instagram'} link={'https://github.com/Jobsidney'}/>
    </div>
    <h2 className='call padd-15'>TALK TO ME:</h2>
    <ContactForm/>
    </div>
</section>
  )
}

export default Contacts