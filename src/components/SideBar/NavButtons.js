import React from 'react'

function NavButtons({link,icon,location}) {
  return (
  <li>
    <a href="#" className="active"><i class={"fa fa-"+icon}></i>{location}</a>
  </li>
  )
}

export default NavButtons
