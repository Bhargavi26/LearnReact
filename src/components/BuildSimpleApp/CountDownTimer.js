import React, { useState, useEffect } from 'react';

function TimerApp() {
  const [secondsRemaining, setSecondsRemaining] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleInputChange = (event) => {
    setSecondsRemaining(parseInt(event.target.value, 10) || 0);
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setSecondsRemaining(0);
    setIsRunning(false);
  };

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        if (secondsRemaining > 0) {
          setSecondsRemaining(secondsRemaining - 1);
        } else {
          setIsRunning(false);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [secondsRemaining, isRunning]);

  return (
    <div>
      <h1>Timer</h1>
      <input 
        type="number" 
        min="0" 
        value={secondsRemaining} 
        onChange={handleInputChange} 
      />
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={resetTimer}>Reset</button>
      <p>
        Time remaining: {secondsRemaining} seconds
      </p>
    </div>
  );
}

export default TimerApp;