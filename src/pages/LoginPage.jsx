import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useState,useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
const LoginPage = () => {
  const { users, addUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
        email: '',
        password: ''
        },
        onSubmit: values => {
            users.forEach(element => {
              if(values.email === element.email && values.password === element.password){
                setError('');
                localStorage.setItem('authToken','admin')
                navigate('/admin');
              }
            });
            setError('Invalid email or password');
        },
    });
    return (
         <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ddd' }}>
      <h2>Login</h2>
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      
      <form onSubmit={formik.handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
          Login
        </button>
      </form>
    </div>
    );
}

export default LoginPage;