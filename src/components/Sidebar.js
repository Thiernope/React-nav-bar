import React, { useState } from 'react'
import { Link } from "react-router-dom"
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css"
import { IconContext } from "react-icons"
import LoginModel from "./LoginModel"
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css"
 function Sidebar () {
    const [ sidebar, setSidebar ] = useState(false)
    const showSidebar = ()=> setSidebar (!sidebar)


    const [ isModelOpen, setIsModelOpen ] = useState(false)

        return (
            <>
            <IconContext.Provider value = {{color: "#fff"}}>
              <div className ="navbar">
                  <Link to = "#" className ="menu-bars" >
                  < FaIcons.FaBars onClick= {showSidebar} />
                  </Link>
                  <h1 className = "login-link" onClick = {()=>setIsModelOpen(true)}>Login</h1>
                   <LoginModel open = {isModelOpen} onClose = {()=>setIsModelOpen(false)}>
                       <div className ="login-form">
                           <form>
                            <label>Email</label><br/><br/>
                            <input type='text'/><br/><br/>
                            <label>Password</label><br/><br/>
                            <input type ="text"/><br/><br/>
                           <Tippy content ="login"><button type="submit">Login</button></Tippy> 
                            </form>
                       </div>
                   </LoginModel>
            </div>  

            <nav className = {sidebar ? "nav-menu active": "nav-menu"} onClick= {showSidebar}>
                <ul className = "nav-menu-items">
                    <li className = "navbar-toggle">
                        <Link to ="#" className = "menu-bars" >
                        < AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {
                    SidebarData.map((item, index )=>{
                        return (
                         <li key={index} className = {item.cName}>
                             <Link to ={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                            </Link>
                        </li>
                        )
                    })
                    }
                </ul>
            </nav>
            </IconContext.Provider>
            </>
        )
    }

export default Sidebar
