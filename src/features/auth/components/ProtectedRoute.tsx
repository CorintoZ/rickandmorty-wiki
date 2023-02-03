import React, { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = cookies.get('TOKEN');
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
