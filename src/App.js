import './App.css';
import { useState } from 'react';
// Chỉ tăng  biến count nhưng không render lại giao diện
function App() {
  const  [name, setName] = useState('');
  const [age, setAge] = useState(18);
  const onChangeName = (e) => {
    setName(e.target.value);
  }
  const handleChangeAge = (value, action) => {
    if(action === 'increase') {
      setAge(age + value);
    } else if(action === 'decrease') {
      setAge(age - value);
    }
  }
  return (
    <div className="App">
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <input type="text" onKeyDown={onChangeName} />
      <input 
        type="button" 
        value={'+'}
        onClick={() => handleChangeAge(1, 'increase')}
      />
      <input 
        type="button" 
        value={'-'}
        onClick={() => handleChangeAge(1, 'decrease')}
      />
    </div>
  );
}

export default App;
