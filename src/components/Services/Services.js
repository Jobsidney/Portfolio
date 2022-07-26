import React from 'react'
import Card from '../Card/Card'

function Services() {
    const service=[
        {title:'Portfolio Web Development',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',icon:"code"},
        {title:'e-commerce Web Development',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',icon:"laptop-code"},
        {title:'Android App Development',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',icon:"mobile-alt"},
        {title:'iOS App Development',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',icon:"mobile-alt"},
        {title:'cross platform apps',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',icon:"bullhorn"},
        {title:'cross platform apps',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',icon:"search"},
    ]
    
  return (
    <section class="service section">
                    <div class="container">
                        <div class="row">
                            <div class="section-title padd-15">
                                <h2>Services</h2>
                            </div>
                        </div>
                        <div class="row">
                               {
                                service.map(skill=><Card title={skill.title} description={skill.description} icon={skill.icon} />)
                               }                       
                        </div>
                    </div>
                </section>
  )
}

export default Services