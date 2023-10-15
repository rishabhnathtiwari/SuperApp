import React from 'react'
import UserInfo from './UserInfo';
import WeatherSection from './WeatherSection';
import NewsSection from './NewsSection';
import './BrowseMain.css';
import TimerSection from './TimerSection';

const BrowseMain = () => {

  return (
    <>
      <div className='container'>
        <div className='verticalconts'>
         <UserInfo/>
         <WeatherSection/>
         <TimerSection/>
        </div>

        <div>
        <NewsSection/>
        </div>

      </div>

    </>
  )
}

export default BrowseMain
