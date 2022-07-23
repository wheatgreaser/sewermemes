import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

export default function Image(meme){
    return(
        <div class = "image">
            <img src = {meme.url}/>
        </div>
        
    )


}