import React from 'react'
import Titles from '../Card/Titles'

function Contacts() {
  return (
    <section className=" section ">
    <div className="container">
    <Titles heading={'Contacts'}/>
    <div className="row">
        <div className="socialMedia padd-15">
            <div className='service-item-inner'>
                <div className="icon">
                <a href="#" className="fa fa-twitter"></a>
                </div>
            </div>
        
        </div>
        
    </div>
    </div>
</section>
  )
}

export default Contacts