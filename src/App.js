import logo from './logo.svg';
import './App.css';
import SignupForm from './pages/SignupForm';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
function App() {
  return (
    <BrowserRouter>
    <nav>
        <Link to="/">Home</Link> | 
        <Link to="/signup">Sign Up</Link> | 
        <Link to="/admin">Admin</Link>
      </nav>
    <Routes>
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
