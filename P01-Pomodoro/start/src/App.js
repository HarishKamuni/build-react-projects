import React, { useRef, useState } from 'react';
import './App.css';

function padTime(time) {
  return time.toString().padStart(2, '0');
}
function App() {
  const [title, setTitle] = useState('Let the countdown begins!');
  const [timeLeft, setTimeLeft] = useState(20);
  const [isRunning, setIsRunning] = useState(false);
  const minutes = padTime(Math.floor(timeLeft / 60));

  const seconds = padTime(timeLeft - minutes * 60);
  let intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return;
    setTitle("You'r doing great!");
    setIsRunning(true);
    console.log(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1;
        //reset the timer
        resetTimer();
        return 0;
      });
    }, 1000);
  };
  const stopTimer = () => {
    if (intervalRef.current === null) return;
    setTitle('Keep it up!');

    clearInterval(intervalRef.current);
    console.log(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
  };
  const resetTimer = () => {
    console.log(intervalRef.current);
    clearInterval(intervalRef.current);
    intervalRef.current = null
    setTitle('Ready to go for another round');
    setTimeLeft(25 * 60);
    setIsRunning(false);
  };
  return (
    <div className="app">
      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        {!isRunning && <button onClick={startTimer}>Start</button>}
        {isRunning && <button onClick={stopTimer}>Stop</button>}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default App;
