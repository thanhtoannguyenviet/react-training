import { useState } from 'react';
export default function Example1_BasicCounter()  {
  const [count, setCount] = useState(0);
  const increment = () => {  
    // Sai - chỉ tăng 1 lần
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    
    // Đúng - tăng 3 lần
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-gray-800">1. Counter Cơ Bản</h2>
      <p className="text-3xl font-bold text-blue-600 mb-4">{count}</p>
      <div className="space-x-2">
        <button 
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Tăng
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Giảm
        </button>
        <button 
          onClick={() => setCount(0)}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}