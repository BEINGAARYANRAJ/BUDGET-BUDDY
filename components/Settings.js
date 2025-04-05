import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/settings.css';

function Settings() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    location: '',
    language: 'english',
    notifications: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Settings saved:', formData);
    alert('Settings saved successfully!');
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="language">Language</label>
          <select
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
          >
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="german">German</option>
          </select>
        </div>

        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="notifications"
            name="notifications"
            checked={formData.notifications}
            onChange={handleChange}
          />
          <label htmlFor="notifications">Enable Notifications</label>
        </div>

        <button type="submit" className="save-btn">Save Settings</button>
      </form>

      <div className="settings-links">
        <Link to="/create-account">Create New Account</Link>
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
    </div>
  );
}

export default Settings;
