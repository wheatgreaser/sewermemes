import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import memeData from "./memeData"
import Image from "./Image"


export default function Meme(){

    let memeUrl = "https://i.imgflip.com/6m72ax.jpg"
    let randomMeme = 0
    
    
    const [meme, setMeme] = React.useState(memeUrl)
    const [text, setText] = React.useState({topText : "", bottomText: "", checked: "true"})


    function handleClick(){
        randomMeme = Math.floor(Math.random() * memeData.length)
        memeUrl = memeData[randomMeme].meme
        setMeme(memeUrl)
    }
    
    function handleChange(event){
        setText(prevText =>{
            return{
                ...prevText,
                [event.target.name]: event.target.value
  
            }
            

        })
        console.log(text)
        
    }
    return(
       
        <div>
            <form className="form">
                <input type="text" placeholder="Top text" className="toptext" onChange={handleChange} name="topText"></input>
                <input type="text" placeholder="Bottom text" className="bottomtext" name="bottomText" onChange={handleChange}></input>
                <input type="button" value="get a new meme template" className="memebutton" onClick={handleClick}></input>
                
                
                
            </form>  
            <div className="display">
                <h1 className="topText">{text.topText}</h1>
                <Image url = {meme}></Image>
                <h1 className="bottomText">{text.bottomText}</h1>
            </div>
            
            
        </div>
    )
}