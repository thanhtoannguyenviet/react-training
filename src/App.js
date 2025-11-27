import './App.css';

// Chỉ tăng  biến count nhưng không render lại giao diện
function App() {
  let count = 0;
  return (
    <div className="App">
      {count}
      <button onClick={() => {
        count += 1;
        console.log(count);
      }}>Increase</button>
    </div>
  );
}

export default App;
