import React, { FC, ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const ProtectedRoute: FC<ReactNode> = ({ children }) => {
  const token = cookies.get('TOKEN');
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children ? children : <Outlet />;
  // return (
  // <Route
  //   {...rest}
  //   element={(props) => {
  //     // get cookie from browser if logged in
  //     const token = cookies.get('TOKEN');
  //     // returns route if there is a valid token set in the cookie
  //     if (token) {
  //       return <Component {...props} />;
  //     } else {
  //       // returns the user to the landing page if there is no valid token set
  //       return (
  //         <Navigate
  //           state={{
  //             // sets the location a user was about to access before being redirected to login
  //             from: props.location,
  //           }}
  //           to={{
  //             pathname: '/',
  //           }}
  //         />
  //       );
  //     }
  //   }}
  // />
  // );
};

export default ProtectedRoute;
