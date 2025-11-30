import { useState } from 'react';
export default function Example3_Boolean() {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-gray-800">3. Boolean Toggle</h2>
      <button 
        onClick={() => setIsVisible(!isVisible)}
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 mb-4"
      >
        {isVisible ? 'Ẩn' : 'Hiện'} nội dung
      </button>
      {isVisible && (
        <div className="bg-purple-100 p-4 rounded mt-4">
          <p className="text-purple-800">Nội dung này có thể ẩn/hiện!</p>
        </div>
      )}
    </div>
  );
}