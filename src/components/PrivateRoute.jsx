import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Navbar from './Navbar';

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  if (currentUser) {
    return (
      <div>
        <Navbar />
        {children}
      </div>
    );
  } else {
    return <Navigate to='/login' />;
  }
}
