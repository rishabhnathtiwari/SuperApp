import React from 'react'
import WindImg from '../../imagefolder/wind.svg';
import humidityimg from '../../imagefolder/humidity.svg';
import Line from '../../imagefolder/Line.png';
import ThermoImg from '../../imagefolder/thermo.svg';
import { useState,useEffect } from 'react';
import './WeatherSection.css';





const WeatherSection = () => {

    const [formatedDateTime, setFormatedDateTime] = useState('');
    const [weather, setWeather] = useState('');


    // Fetching weather data using API

    useEffect(() => {

        const fetchWeather = async () => {
          try {
            const result = await fetch("https://api.weatherapi.com/v1/current.json?key=93ae3766614848499db101510232308&q=kolkata&aqi=no");
            const data = await result.json();
            setWeather(data);
          } 
          catch (error) {
            console.log("Error fetching weather data:", error);
          }
        };


        fetchWeather();

    },[]);


    // For Updating formated date and time



    useEffect(() => {
        const updateFormatedDateTime = () => {
          const now = new Date();
    

          const year = now.getFullYear();
          const month = (now.getMonth() + 1).toString().padStart(2, '0');
          const day = now.getDate().toString().padStart(2, '0');

    
          const hours = now.getHours().toString().padStart(2, '0');
          const minutes = now.getMinutes().toString().padStart(2, '0');

    
          const formatedDate = `${month}-${day}-${year}`;
          const formatedTime = `${hours % 12 || 12}:${minutes}`;
          const formatedDateTime = `${formatedDate} \u00A0 ${formatedTime} ${hours >= 12 ? 'PM' : 'AM'}`;
          setFormatedDateTime(formatedDateTime);

        };

    
        updateFormatedDateTime();
        const intervalId = setInterval(updateFormatedDateTime, 60000);
        return () => clearInterval(intervalId);
      }, []);




  return (
    <div className='weatherdatetime'>


        <div>
            <p className='displaydate'>{formatedDateTime}</p>
        </div>



        {weather  ?
        <div className='weather'>

            <div className='Condition' >
            <img src={weather.current.condition.icon} alt='Weather_Icon' height={85} width={85}/>
            <p style={{width:"125px", fontSize:"16px"}}>{weather.current.condition.text}</p>

        </div>
       
        <img  className="Line"src={Line}/>


        <div className='pressure'>
         <p style={{fontSize:"32px"}}>{weather.current.temp_c}°C</p>

        <pre>
            <img src={ThermoImg} style={{position:"relative",top:"10px", paddingRight:"10px"}}/>
            <span>   {weather.current.pressure_mb} mbar<br/>      Pressure</span>

        </pre>
       
        </div>


        <img className="Line"src={Line} />

        <div className='humidity'>

        <pre><img src={WindImg} style={{position: "relative", top:"10px", paddingRight:"10px"}}/><span>{weather.current.wind_kph} km/h<br/>          Wind</span></pre>
        <pre><img src={humidityimg} style={{position: "relative", top:"12px", paddingRight:"10px"}}/><span> {weather.current.humidity}%<br/>        Humidity</span></pre>

        </div>

            </div>

       
      :<> </>  }
        

      
    </div>
  )
}

export default WeatherSection;
