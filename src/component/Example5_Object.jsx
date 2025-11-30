import { useState } from 'react';

export default function Example5_Object() {
  const [user, setUser] = useState({
    name: 'Nguyễn Viết Thanh Toàn',
    age: 25,
    email: 'nvtt@example.com'
  });
  
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-gray-800">5. Object State</h2>
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium mb-1">Tên:</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="border-2 border-gray-300 px-4 py-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Tuổi:</label>
          <input
            type="number"
            value={user.age}
            onChange={(e) => setUser({ ...user, age: parseInt(e.target.value) })}
            className="border-2 border-gray-300 px-4 py-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="border-2 border-gray-300 px-4 py-2 rounded w-full"
          />
        </div>
        <div className="bg-blue-100 p-4 rounded mt-4">
          <p className="font-bold">Thông tin:</p>
          <p>Tên: {user.name}</p>
          <p>Tuổi: {user.age}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
}