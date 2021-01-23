import React  from 'react'
import * as FaIcons from "react-icons/fa"
import "../App.css"
function Node() {

        return (
            <>
            <div className = "node-logo">
                <h1>
                <FaIcons.FaNode />
                </h1>
            </div>
            <div className ="node">
               <p>Node js</p> 
            </div>
            </>
        )
    }


export default Node