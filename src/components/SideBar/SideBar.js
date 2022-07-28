import React,{useState} from 'react'
import NavButtons from './NavButtons'



function SideBar() {
    const icons=[
    {icon:'home',word:'Home',link:'/',id:1},
    {icon:'user',word:'About',link:'/about',id:2},
    {icon:'list',word:'Services',link:'/services',id:3},
    {icon:'laptop-code',word:'Projects', link:'/projects',id:4},
    {icon:'comments',word:'Contacts',link:'/contacts',id:5},
]

  return (
    <div className="aside">
    <div className="logo">
        <a href="#"><span>Soft</span>-Dev</a>
    </div>
    <div className="nav-toggler">
        <span></span>
    </div>
    <ul className="nav">{
        icons.map(btn=><NavButtons   icon={btn.icon} location={btn.word} link={btn.link} id={btn.id} />)
    }
        
    </ul>
</div>
  )
}

export default SideBar