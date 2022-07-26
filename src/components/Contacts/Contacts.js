import React from 'react'
import Titles from '../Card/Titles'

function Contacts() {

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
    <div className="row">
        <SocialMediaIcon icon={'twitter'} link={'#'}/>
        <SocialMediaIcon icon={'github'} link={'#'}/>
        <SocialMediaIcon icon={'linkedin'} link={'#'}/>
        <SocialMediaIcon icon={'instagram'} link={'#'}/>
    </div>

    </div>
</section>
  )
}

export default Contacts