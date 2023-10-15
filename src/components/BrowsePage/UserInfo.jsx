import React from 'react'
import Profilepic from '../../imagefolder/profilepicture.png';
import './UserInfo.css';


const UserInfo = () => {
    var storedData= JSON.parse(localStorage.getItem('formData'));
    var storedGenre= JSON.parse(localStorage.getItem('selectedGenre')); 
     return (
    <div className='userInfo'>
        <img src={Profilepic} alt="ProfilePicture" className='profile_img'/>
        <div className='user_selected'>
            <div className='user_data'>
                <p>{storedData.name}</p>
                <p>{storedData.email}</p>
                <h2>{storedData.username}</h2>
            </div>
            <div className='userGenre'>
                {storedGenre.slice(0,9).map((data)=>(
                    <p>{data}</p>
                ))
}
            </div>

        </div>

      
    </div>
  )
}

export default UserInfo;
