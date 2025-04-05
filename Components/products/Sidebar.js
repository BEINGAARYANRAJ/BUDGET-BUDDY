import { Link } from 'react-router-dom';
import '../styles/global.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="brand">BUDGET <span>BUDDY</span></h2>
      <div className="menu-item">
        <i className="material-icons">grid_view</i>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div className="menu-item">
        <i className="material-icons">person</i>
        <Link to="/customers">Customers</Link>
      </div>
      <div className="menu-item">
        <i className="material-icons">inventory</i>
        <Link to="/products">Products</Link>
      </div>
      <div className="menu-item">
        <i className="material-icons">bar_chart</i>
        <Link to="/reports">Reports</Link>
      </div>
      <div className="menu-item">
        <i className="material-icons">settings</i>
        <Link to="/settings">Settings</Link>
      </div>
      <div className="menu-item">
        <i className="material-icons">logout</i>
        <Link to="/logout">Log out</Link>
      </div>
    </div>
  );
}

export default Sidebar;
