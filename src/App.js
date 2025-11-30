import logo from './logo.svg';
import './App.css';
import { useState, useEffect, use } from 'react';
import { clear } from '@testing-library/user-event/dist/clear';

function App() {
  const [firms, setFirms] = useState([]);
  useEffect(() => {
    fetch('https://api.imdbapi.dev/titles')
      .then(response => response.json())
      .then(data => {
        setFirms(data.titles);
      })
      .catch(error => console.error('Error fetching firms:', error));
    console.log(firms);
  }, [firms]);

  return (
    <div>
      <h1>Firms List</h1>
      <ul>
        {firms.map(firm => (
          <li key={firm.id}>{firm.originalTitle}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
