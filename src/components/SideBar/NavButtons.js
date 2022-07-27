import React,{useEffect, useState} from 'react'
import {Route, Routes,Link} from "react-router-dom";

function NavButtons({link,icon,location,clicked,id}) {

const [backColor,setBackColor]=useState('inActive')
const [clickedButton,setClicked]=useState(true)

const handleClick=(e)=>{
  clickedButton?setBackColor('active'):setBackColor('')
    setClicked(!clickedButton)
  }

  return (
  <li key={id}>
    <Link  to={link} className={backColor} onClick={handleClick}><i class={"fa fa-"+icon}></i>{location} </Link>
  </li>
  )
}

export default NavButtons
