import { Link } from 'react-router-dom';
import logo1 from '../assets/logo1.jpg';

export default function Navigation() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className='navbar'>
      <div>
        <span className='logo'>Lost & Found</span>
        {user && <p style={{ color: "#aaa", fontSize: "0.85rem" }}>Welcome {user.username}</p>}
      </div>
      <ul className='nav-links'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/contact">Contacts</Link></li>
      </ul>
    </nav>
  );
}