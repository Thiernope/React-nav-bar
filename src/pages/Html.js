import React from 'react'
import "../App.css"
import ReactPlayer from "react-player"
import  { HtmlVideos } from "./HtmlVideos"
 function Html (){

        return (
            <>
            
                 <ul className= "video-list">
                          {
                         HtmlVideos.map((video, index) => {
                              return(
                          <li key = {index} class="video-page">
                              <div>
                              <h1 className ="video-title">{video.title}</h1>
                              <ReactPlayer width= "300px" height="200px" controls url = {video.url}/>
                              <p className="description">{video.description}</p>
                              </div>
                          </li>
                      )
                  })
               }

               </ul>
        
            </>
        )
    }


export default Html