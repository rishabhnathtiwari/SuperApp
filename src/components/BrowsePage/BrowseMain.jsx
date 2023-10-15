import React from 'react'
import UserInfo from './UserInfo';
import WeatherSection from './WeatherSection';
import NewsSection from './NewsSection';
import './BrowseMain.css';

const BrowseMain = () => {

  return (
    <>
      <div className='container'>
        <div className='verticalside'>
         <UserInfo/>
         <WeatherSection/>

        
        </div>
        <div>
        <NewsSection/>
        </div>

      </div>

    </>
  )
}

export default BrowseMain
