import React,{useState} from 'react'
import NavButtons from './NavButtons'



function SideBar() {
    const icons=[
    {icon:'home',word:'Home',link:'/home'},
    {icon:'user',word:'About',link:'/about'},
    {icon:'list',word:'Services',link:'/services'},
    {icon:'laptop-code',word:'Projects', link:'/projects'},
    {icon:'comments',word:'Contacts',link:'/contact'},
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
        icons.map(btn=><NavButtons clicked='inActive' icon={btn.icon} location={btn.word} link={btn.link} />)
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