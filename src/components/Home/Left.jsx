import React from 'react'
import frontImage from "../../ImageFiles/background.png"
import './Left.css'

function Left() {
  return (
    <div className='LeftConatiner'>
        <img id='frontImg' src= {frontImage} alt='FrontImage'/>
        <h1 id="desc">Discover new things on <br/> Superapp</h1>
    </div>
  )
}


export default Left;