import React from "react";
import ReactDOM  from "react-dom";
import "./styles.css"
import logo from "./logo.jpg"

export default function Header(){
    return(
        <header className="header">
            <img src = {logo} className="header_image"/>
            <h1 className="title">sewermemes</h1>          
        </header>
            
        
    )
}