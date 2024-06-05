import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
    const[isActive, setIsActive] = useState(false);
    const[isStop, setIsStop] = useState(false);
    const[time, setTime] = useState(0);


    useEffect(()=>{
        let interval = null;

        if(isActive && isStop===false){
        interval = setInterval(()=>{
            setTime((time)=>time+1000);
        },1000)
    }

        return()=>{
            clearInterval(interval)
        }

    },[isActive,isStop]);
    
    const handleStart = () => {
        setIsActive(true);
        setIsStop(false);
    }

    const handleStop = () => {
        setIsStop(!isStop);
    }

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    }
    return(
        <div>
            <div>
            <h1>Stopwatch</h1>
            {console.log("time", time)}
            <p>Time : </p>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
            
        </div>
        </div>
    )
}

export default Stopwatch;