import './App.css';
import { useState } from 'react';
// Chỉ tăng  biến count nhưng không render lại giao diện
function App() {
  const  [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
    console.log(count);
  }
  return (
    <div className="App">
      {count}
      <button onClick={() => {
        setCount(count + 1);
        console.log(count);
      }}>Increase</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
