// client/src/components/Header.js
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Header = ({ auth, setAuth }) => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('token');
    setAuth(false);
    history.push('/');
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {auth ? (
          <>
            <li><Link to="/apply">Apply Job</Link></li>
            <li><Link to="/admin/dashboard">Admin Dashboard</Link></li>
            <li><button onClick={logout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;