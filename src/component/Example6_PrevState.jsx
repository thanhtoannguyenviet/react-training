import { useState } from 'react';
export default function Example6_PrevState() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([0]);
  
  const increment = () => {
    setCount(prev => {
      const newValue = prev + 1;
      setHistory([...history, newValue]);
      return newValue;
    });
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-gray-800">6. Previous State Pattern</h2>
      <p className="text-3xl font-bold text-orange-600 mb-4">{count}</p>
      <button 
        onClick={increment}
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 mb-4"
      >
        Tăng
      </button>
      <div className="bg-orange-100 p-4 rounded">
        <p className="font-bold mb-2">Lịch sử:</p>
        <p className="text-sm">{history.join(' → ')}</p>
      </div>
    </div>
  );
}