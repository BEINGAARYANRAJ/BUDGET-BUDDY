import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validateForm = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={validateForm}>
          <input
            type="text"
            name="username"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="button">Login</button>
        </form>
        <div className="links">
          <a href="#forgot">Forgot Password?</a>
          <a href="#create">Create New Account</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
