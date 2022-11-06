import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import { ImMenu } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai"
import { useState } from 'react';
// import { useRef } from 'react';
import "../styles/navbar.css"
import { UserAuth } from '../context/context';

export const Navbar = () => {
  const [isClicked,setIsClicked]=useState(false)

  const handleClick=()=>{
    setIsClicked(true)
    
    const{user,logOut}=UserAuth()

  }
  return (
    
   
     <header className={isClicked?"nav-mobile":"nav-header"}>
      <div className='Logo'>
        Random<span>Users</span>
      </div>
       <nav className="navlinks">
       <ul>
       <li> <NavLink  to="/">Home</NavLink></li>
       <li> <NavLink  to="/People">Users</NavLink></li>
       <li ><NavLink  to="/about">About</NavLink></li>
       <li ><NavLink  to="/error">Error page</NavLink></li>
       <li ><NavLink  to="/Signup">SignIn</NavLink></li>
       </ul>
            
      </nav>
      <a onClick={()=>setIsClicked(!isClicked)} className='bar'>{isClicked?<AiOutlineClose/>:<ImMenu/>}</a>
      <Outlet/>  
     </header>
   
   
    
  )
}
