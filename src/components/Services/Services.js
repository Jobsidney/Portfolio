import React from 'react'
import Card from '../Card/Card'
import Titles from '../Card/Titles'

function Services() {
    const service=[
        {title:'Portfolio Web Development',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',icon:"code"},
        {title:'e-commerce Web Development',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',icon:"laptop-code"},
        {title:'Android App Development',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',icon:"mobile-alt"},
        {title:'iOS App Development',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',icon:"mobile-alt"},
        {title:'cross platform apps',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',icon:"bullhorn"},
        {title:'Huawei DataCom',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',icon:"search"},
    ]

    
  return (
    <section className="service section">
                    <div className="container">
                        <Titles heading={'Services'}/>
                        <div className="row">
                               {
                                service.map(skill=><Card title={skill.title} description={skill.description} icon={skill.icon} />)
                               }                       
                        </div>
                    </div>
                </section>
  )
}

export default Services