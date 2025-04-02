import React from 'react';
import './Logout.css';

function Logout() {
  const handleLogout = () => {
    // Clear user session or perform logout logic
    alert('You have been logged out successfully.');
    window.location.href = '/login.html'; // Redirect to the login page
  };

  return (
    <div className="logout-container">
      <h1>Logout</h1>
      <p>Are you sure you want to log out?</p>
      <div className="logout-buttons">
        <button className="button confirm" onClick={handleLogout}>
          Yes, Log Out
        </button>
        <button
          className="button cancel"
          onClick={() => (window.location.href = '/index.html')}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Logout;
