import React, { useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import './TimerSection.css';
import Down from '../../imagefolder/Down.svg';
import Up from '../../imagefolder/Up.svg';


const TimerSection = () => {
    
    
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const [play, setPlay] = useState(false)

    const [timerComplete, setTimerComplete] = useState(false);


    const formatValue = (value) => {
        return value < 10 ? `0${value}` : value;
    };


    const increaseHours = () => {
        setHours(hours + 1);
        if (hours ===23) {
            setHours(0)
        }
    }

    const increaseMinutes = () => {
        setMinutes(minutes + 1);
        if (minutes === 59) {
            setMinutes(0)
        }
    }

    const increaseSeconds = () => {
        setSeconds(seconds + 1)
        if (seconds === 59) {
            setSeconds(0)
        }
    }

    const decreaseHours = () => {
        setHours(hours - 1);
        if (hours === 0) {
            setHours(23)
        }
    }

    const decreaseMinutes = () => {
        setMinutes(minutes - 1);
        if (minutes == 0) {
            setMinutes(59)
        }
    }

    const decreaseSeconds = () => {
        setSeconds(seconds - 1)
        if (seconds == 0) {
            setSeconds(59)
        }
    }


    function toHoursAndMinutes(totalSeconds) {
        const totalMinutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${formatValue(hours)} : ${formatValue(minutes)} : ${formatValue(seconds)}`;
    }



  return (
    <div className='timecontainer'>
        <div className='timer'>
            <div className='countDown'>
            
            <CountdownCircleTimer
                        key={timerComplete? "play" : "paused"}
                        isPlaying={play}
                        duration={seconds + minutes * 60 + hours * 60 * 60}
                        colors={timerComplete ? ["white"] : ["#FF6A6A"]}
                        onComplete={() => {
                            setPlay(false);
                            setTimerComplete(true);
                        }}
                    >
                        {({ remainingTime }) => <span style={{ fontSize: "20px" }}> {timerComplete ? "Over!" : toHoursAndMinutes(remainingTime)}</span>}
                    </CountdownCircleTimer>

            </div>

       <div className='hours'>
     
                    <p>Hours</p>
                    <img src={Up} onClick={increaseHours} />
                    <h2>{formatValue(hours)} </h2>
                    <img src={Down} onClick={decreaseHours} />

        </div>

        <h1>:</h1>


        <div className='minutes'>
            <p>Minutes</p>
            <img src={Up} onClick={increaseMinutes} />
                    <h2>{formatValue(minutes)}</h2>
                    <img src={Down} onClick={decreaseMinutes} />


        </div> 
        <h1>:</h1>

        <div className='seconds'>
                    <p>Seconds</p>
                    <img src={Up} onClick={increaseSeconds} />
                    <h2>{formatValue(seconds)}</h2>
                    <img src={Down} onClick={decreaseSeconds} />
       </div>



        </div>

         <button className='startbtn' onClick={() => {
                if (timerComplete) {
                    setTimerComplete(false);
                    setPlay(false);
                    setHours(0);
                    setMinutes(0);
                    setSeconds(0);
                } else {
                    setPlay((play) => !play);
                }
            }}>
                {timerComplete ? <p>RESET</p> : (play ? <p>PAUSE</p> : <p>START</p>)}
            </button>
    
    </div>
  )
}

export default TimerSection;
