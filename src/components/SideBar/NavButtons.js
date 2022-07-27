import React from 'react'
import {Route, Routes,Link} from "react-router-dom";

function NavButtons({link,icon,location,clicked}) {


  return (
  <li>
    <Link to={link} className={clicked}><i class={"fa fa-"+icon}></i>{location} </Link>
  </li>
  )
}

export default NavButtons
