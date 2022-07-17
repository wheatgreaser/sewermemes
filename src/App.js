import React from "react";
import ReactDOM  from "react";
import "./styles.css"
import Joke from "./Joke"
import jokes from "./jokes"

const imageArray = ["./morbius.jpg", "./thumbnail.png", "./titlescreen.png"]
const imageDisplay = imageArray.map(function imageMap(image){
    return <img src = {image}></img>

})

const currentJoke = jokes.map(function jokeMap(joke){
    return <Joke movieName = {joke.movieName} actor = {joke.actor}></Joke>
})
export default function App(){
    return(
        <div>
            {currentJoke}
            {imageDisplay}
        </div>

    )
    
}