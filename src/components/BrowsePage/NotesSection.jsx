import React, { useEffect, useState } from 'react';
import './NotesSection.css';





const NotesSection = () => {

    const [Txt,setTxt]=useState('')
    const Updatetxt=(e)=>{
        const newTxt = e.target.value;
        setTxt(newTxt);
        localStorage.setItem('TextArea',newTxt);
    };

    useEffect(()=>{
        const savedTxt = localStorage.getItem('TextArea');
        if (savedTxt) {
        setTxt(savedTxt);
        }
    }, []);


  return (
    <div className='txtarea'>
        <p className='fixedtxt'>
            <b style={{fontSize:"28px"}}>All Notes</b>
            <br/>
            <br />
            This is how I am going to learn MERN Stack in next 3 months.
        </p>
        <textarea className='txt' value={Txt} onChange={Updatetxt}></textarea>
      
    </div>
  )
}

export default NotesSection;
