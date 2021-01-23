import React from 'react'
import ReactDom from "react-dom"
import { CgClose }from "react-icons/cg";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css"
function LoginModel({open, children, onClose}) {
    const modelStyle = {
        position: "fixed",
        top: "30%",
        left: "40%",
        transfrom: "translate(-50%, -50%)",
        backgroundColor: "#fff",
        padding: "50px",
        zIndex: 1000,
        width: "400px",
        height: "60vh"   

    }

    const overlayStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        right:0,
        bottom:0,
        backgroundColor: "rgba(0,0,0, .7)",
        zIndex: 1000
    }

    const closeIcon ={
        color: "red",
        marginLeft: "300px",
        fontSize: "2rem"
    }
   
    if(!open ) return null
    return ReactDom.createPortal (
        <>
        <div style = {overlayStyle}/>
    
        <div style = {modelStyle}>
            <Tippy content ="Close">
            <div><CgClose style ={closeIcon} onClick = {onClose}/></div>
            </Tippy>
            {children}
        </div> 
        
        </>,
        document.getElementById("portal")
    )
}

export default LoginModel
