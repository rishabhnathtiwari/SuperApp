import React from 'react';
import './FrontPage.css'
import LeftSide from './Left.jsx'
import InputForm from './Form.jsx'
function FrontPage() {
  return (
    <div className='container'>
    <LeftSide/>
    <InputForm/>
    </div>
  )
}

export default FrontPage;