import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { clear } from '@testing-library/user-event/dist/clear';

function App() {
  const [timer, setTimer] = useState(10);
  
  useEffect(() => {
    
    console.log(timer);
    if(timer < 0) {
      return;
    }
  
    const timerId = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    } , 1000);

    return () => clearInterval(timerId); // cleanup function
  }, [timer]); // [timer] = chạy khi timer thay đổi
  
  return (
    <div>
      {timer >= 0 ? <h1>Countdown: {timer} seconds</h1> : <h1>Time's up!</h1>}
    </div>
  );
}

export default App;
