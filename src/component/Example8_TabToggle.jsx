

import { useState } from 'react';
export default function Example8_Toggle() {
  const [activeTab, setActiveTab] = useState('home');
  
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-gray-800">8. Tab Toggle</h2>
      <div className="flex gap-2 mb-4">
        {['home', 'profile', 'settings'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded capitalize ${
              activeTab === tab 
                ? 'bg-pink-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-pink-100 p-4 rounded">
        <p className="font-bold mb-2">Nội dung tab {activeTab}:</p>
        {activeTab === 'home' && <p>Đây là trang chủ</p>}
        {activeTab === 'profile' && <p>Đây là trang hồ sơ</p>}
        {activeTab === 'settings' && <p>Đây là trang cài đặt</p>}
      </div>
    </div>
  );
}
