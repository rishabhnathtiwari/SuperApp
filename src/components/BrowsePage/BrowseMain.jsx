import React from 'react'
import UserInfo from './UserInfo';
import WeatherSection from './WeatherSection';
import NewsSection from './NewsSection';
import './BrowseMain.css';
import TimerSection from './TimerSection';
import NotesSection from './NotesSection';

const BrowseMain = () => {

  return (
    <>
      <div className='maincontainer'>
        <div className='verticalconts'>
         <UserInfo/>
         <WeatherSection/>
         <TimerSection/>
        </div>
       <div>
        <NotesSection/>
       </div>
        <div>
        <NewsSection/>
        </div>

      </div>

    </>
  )
}

export default BrowseMain;
