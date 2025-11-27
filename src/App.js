import './App.css';
import { useState } from 'react';
// Chỉ tăng  biến count nhưng không render lại giao diện
function App() {
  const  [name, setName] = useState('');
  const onChangeName = (e) => {
    setName(e.target.value);
  }
  return (
    <div className="App">
      <h1>Name: {name}</h1>
      <input 
        type="text" 
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input type="text" onKeyDown={onChangeName} />
    </div>
  );
}

export default App;
