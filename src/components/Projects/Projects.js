import React,{useEffect,useState} from 'react'
import Card from '../Card/Card'
import Titles from '../Card/Titles'

function Projects() {
const [dataProjo,setDataProjo]=useState([])
useEffect(()=>{
    fetch('https://jobsidney.github.io/jsonServer/data.json')
    .then(response=>response.json())
    .then(data=>{
        console.log(data.projects);
        setDataProjo(data.projects)
    })
},[])
  return (
    <section className="service section">
    <div className="container">
    <Titles heading={'Projects'}/>
        <div className="row">
              {dataProjo.map(data=><Card key={data.id} title={data.title} img={data.image} False={false} description={data.description} linkName={'LEARN MORE'}link={data.link}/>)}
        </div>
    </div>
</section>
  )
}

export default Projects