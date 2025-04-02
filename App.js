import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Products from './components/Products';
import Reports from './components/Reports';
import Settings from './components/Settings';
import Login from './components/Login';
import Logout from './components/Logout';
import Sidebar from './components/Sidebar';
import './styles/main.css';

function App() {
  return (
    <Router>
      <Routes>
        {}
        <Route path="/login" element={<Login />} />
        
        {}
        <Route path="/*" element={
          <div className="app-container">
            <Sidebar />
            <div className="main-content">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/products" element={<Products />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/" element={<Login />} />
              </Routes>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;