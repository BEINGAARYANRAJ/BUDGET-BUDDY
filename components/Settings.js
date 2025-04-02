import React, { useState } from 'react';
import './Settings.css';

function Settings() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [language, setLanguage] = useState('en');
  const [notifications, setNotifications] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    const settings = {
      username,
      password,
      location,
      language,
      notifications,
    };
    console.log('Settings saved:', settings);
    alert('Settings have been saved successfully!');
  };

  return (
    <div className="container">
      <h1>Settings</h1>
      <form onSubmit={handleSave}>
        <div className="setting">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="setting">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="setting">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="setting">
          <label htmlFor="language">Language</label>
          <select
            id="language"
            name="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>
        <div className="setting">
          <label>
            <input
              type="checkbox"
              name="notifications"
              id="notifications"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
            Enable Notifications
          </label>
        </div>
        <div className="setting">
          <button type="submit">Save Settings</button>
        </div>
      </form>
      <div className="links">
        <a href="/create_account.html">Create New Account</a>
        <a href="/forgot_password.html">Forgot Password?</a>
      </div>
    </div>
  );
}

export default Settings;
