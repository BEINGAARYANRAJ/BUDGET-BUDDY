import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

    
    window.location.href = '/index.html';
  };

  return (
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
        <a href="/forgot_password.html">Forgot Password?</a>
        <a href="/create_account.html">Create New Account</a>
      </div>
    </div>
  );
}

export default Login;
