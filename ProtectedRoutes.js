import React from 'react';
import {  Redirect } from 'react-router-dom';

function ProtectedRoutes({ children }) {
  const auth = localStorage.getItem('token');
  return auth ? children : <Redirect to="/home" />;
}
export default ProtectedRoutes;