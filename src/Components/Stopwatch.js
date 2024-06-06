import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
    const[isActive, setIsActive] = useState(false);
    const[time, setTime] = useState(0);


    useEffect(()=>{
        let interval = null;

        if(isActive){
        interval = setInterval(()=>{
            setTime((time)=>time+10);
        },10)
    }

        return()=>{
            clearInterval(interval)
        }

    },[isActive]);
    


    const handleStartStop = () => {
        setIsActive(prevState => !prevState);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    }

    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);


    return(
        <div style={{padding: '10px'}}>
            
            <h1>Stopwatch</h1>
            {console.log("time", time)}
            <p>Time: {minutes}:{seconds<10? '0'+seconds : seconds}</p>
            <button onClick={handleStartStop}>{isActive ? 'Stop' : 'Start'}</button>
            <button onClick={handleReset}>Reset</button>
            
        </div>
        
    )
}

export default Stopwatch;