import React, { useState, useEffect } from 'react'


export function StopWatch() {

    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(()=>{

        let intervalId;
        if(isRunning){

            intervalId = setInterval(()=>{
                 setTimer(prevTimer => prevTimer+1)
            }, 1000)
        }

        return ()=> clearInterval(intervalId)

    }, [isRunning])

    const handleStart = () => {
        setIsRunning(true)  
    }

    const handlePause = () => {
        setIsRunning(false);
    }

    const handleReset = () => {
        setIsRunning(false);
        setTimer(0)
    }

    // useEffect(() => {
    //     let intervalId;
    //     if (isRunning) {
    //         intervalId = setInterval(() => {
    //             setTimer(prevTimer => prevTimer + 1)
    //         }, 1000)
    //     }

    //     return () => clearInterval(intervalId);
    // }, [isRunning])


    // useEffect(() => {
    //     let intervalId;
    //     if (isRunning) {
    //       intervalId = setInterval(() => {
    //         setSeconds(prevSeconds => prevSeconds + 1);
    //       }, 1000);
    //     }

    //     return () => clearInterval(intervalId);
    //   }, [isRunning]);

    return (
        <>
            <h1>Stop Watch</h1>
            <h3>{timer}</h3>
            <button onClick={handleStart}>Start</button>
            <button onClick={handlePause} disabled={!isRunning}>Pause</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )

}