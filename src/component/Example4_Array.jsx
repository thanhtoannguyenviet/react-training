import { useState } from 'react';
function Example4_Array() {
  const [items, setItems] = useState(['Táo', 'Chuối', 'Cam']);
  const [newItem, setNewItem] = useState('');
  
  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };
  
  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-gray-800">4. Array State</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addItem()}
          placeholder="Thêm trái cây..."
          className="border-2 border-gray-300 px-4 py-2 rounded flex-1"
        />
        <button 
          onClick={addItem}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Thêm
        </button>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded">
            <span>{item}</span>
            <button 
              onClick={() => removeItem(index)}
              className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Example4_Array;