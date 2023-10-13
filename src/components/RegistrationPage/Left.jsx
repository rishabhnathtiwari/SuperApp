import React from 'react'
import frontImage from "../../imagefolder/background.png"
import './Left.css'

function Left() {
  return (
    <div>
        <img className='frontImage' src= {frontImage} alt='FrontImage'/>
        <h1 id="text">Discover new things on <br/> Superapp</h1>
    </div>
  )
}


export default Left;