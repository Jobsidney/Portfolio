import React,{useState} from 'react'
import NavButtons from './NavButtons'



function SideBar() {
    const icons=[
    {icon:'home',word:'Home'},
    {icon:'user',word:'About'},
    {icon:'list',word:'Services'},
    {icon:'laptop-code',word:'Projects'},
    {icon:'comments',word:'Contacts'}
]
const [clickedButton,setClicked]=useState(false)
const handleClick=(e)=>{
    setClicked(!clickedButton)}

  return (
    <div className="aside">
    <div className="logo">
        <a href="#"><span>Soft</span>-Dev</a>
    </div>
    <div className="nav-toggler">
        <span></span>
    </div>
    <ul className="nav">{
        icons.map(btn=><NavButtons link='#' clicked='inActive' icon={btn.icon} location={btn.word} />)
    }
        {/* <NavButtons link='#' clicked="active" icon="home" location="Home"/>
        <NavButtons link='#' clicked="inActive" icon="user" location="About"/>
        <NavButtons link='#' clicked="inActive" icon="list" location="Searvices"/>
        <NavButtons link='#' clicked="inActive" icon="briefcase" location="Portfolio"/>
        <NavButtons link='#' clicked="inActive" icon="comments" location="Contacts"/> */}
        
    </ul>
</div>
  )
}

export default SideBar