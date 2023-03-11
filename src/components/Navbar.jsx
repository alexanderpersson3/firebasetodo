import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import './TodoList.scss';

function Navbar() {
  const { logout } = useAuth();
  async function handleLogut() {
    try {
      await logout();
      navigate.push('/login');
    } catch {}
  }
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary center'>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav mx-auto'>
          <li className='nav-item'>
            <a className='nav-link' href='/todo-list'>
              To Do List
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/update-profile'>
              Update Profile
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#' onClick={handleLogut}>
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
