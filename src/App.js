import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('Count đã thay đổi:', count);
    // Chạy mỗi khi count thay đổi
  }, [count]); // [count] = chạy khi count thay đổi
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}

export default App;
