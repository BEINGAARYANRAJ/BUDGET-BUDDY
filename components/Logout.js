import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/logout.css';

function Logout() {
  const navigate = useNavigate();

  const logout = () => {
    alert('You have been logged out.');
    navigate('/');
  };

  return React.createElement('div', { className: 'logout-container' },
    React.createElement('div', { className: 'container' },
      React.createElement('h1', null, 'Are you sure you want to log out?'),
      React.createElement('button', { onClick: logout }, 'Logout')
    )
  );
}

export default Logout;
