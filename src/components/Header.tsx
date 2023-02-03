import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const Header = () => {
  const cookies = new Cookies();
  const token = cookies.get('TOKEN');
  const navigate = useNavigate();

  const logOut = () => {
    cookies.remove('TOKEN', { path: '/' });
    navigate(0);
  };

  return (
    <div className="bg-blue-500 h-14 w-full flex justify-end items-center gap-x-4 p-2 text-white text-lg font-medium">
      {token ? (
        <button
          className="p-2 tex-white bg-red-400 rounded-md"
          type="submit"
          onClick={logOut}
        >
          Logout
        </button>
      ) : (
        <Link to={'/login'}>Login</Link>
      )}
      <Link to={'/register'}>Register</Link>
    </div>
  );
};

export default Header;
