import React,{useEffect,useState} from 'react'
import Card from '../Card/Card'
import Titles from '../Card/Titles'

function Projects() {
const [dataProjo,setDataProjo]=useState([])
useEffect(()=>{
    fetch('http://localhost:8000/projects')
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        setDataProjo(data)
    })
},[])
  return (
    <section className="service section">
    <div className="container">
    <Titles heading={'Projects'}/>
        <div className="row">
              {dataProjo.map(data=><Card title={data.title} description={data.description}linkName={'LEARN MORE'}link={data.link}/>)}
        </div>
    </div>
</section>
  )
}

export default Projects