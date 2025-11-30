import { useState } from 'react';
export default function Example7_TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Học React', completed: false },
    { id: 2, text: 'Làm bài tập', completed: true }
  ]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: input,
        completed: false
      }]);
      setInput('');
    }
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-gray-800">7. Todo List Hoàn Chỉnh</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Thêm công việc..."
          className="border-2 border-gray-300 px-4 py-2 rounded flex-1"
        />
        <button 
          onClick={addTodo}
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
        >
          Thêm
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center gap-3 bg-gray-100 p-3 rounded">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="w-5 h-5"
            />
            <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
              {todo.text}
            </span>
            <button 
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
      <p className="text-sm text-gray-600 mt-4">
        Hoàn thành: {todos.filter(t => t.completed).length}/{todos.length}
      </p>
    </div>
  );
}
