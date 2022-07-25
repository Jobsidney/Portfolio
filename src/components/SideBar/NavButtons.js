import React from 'react'

function NavButtons({link,icon,location,clicked}) {


  return (
  <li>
    <a href="#" className={clicked}><i class={"fa fa-"+icon}></i>{location} </a>
  </li>
  )
}

export default NavButtons
