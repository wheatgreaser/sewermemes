import React from "react";
import ReactDOM  from "react";

export default function Joke(props){
    return(
        <div>
            <p>Movie name: {props.movieName}</p>
            <p>Actor: {props.actor} </p>
        </div>

    )
    
}