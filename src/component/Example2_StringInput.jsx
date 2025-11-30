import { useState } from 'react';
function Example2_StringInput() {
  const [text, setText] = useState('');
  
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-gray-800">2. Input Text</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập tên của bạn..."
        className="border-2 border-gray-300 px-4 py-2 rounded w-full mb-4"
      />
      <p className="text-lg">
        Xin chào, <span className="font-bold text-blue-600">{text || 'khách'}</span>!
      </p>
      <p className="text-sm text-gray-600 mt-2">Độ dài: {text.length} ký tự</p>
    </div>
  );
}
export default Example2_StringInput;