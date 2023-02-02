import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-blue-500 h-14 w-full flex justify-end items-center gap-x-4 p-2 text-white text-lg font-medium">
      <Link to={'/login'}>Login</Link>
      <Link to={'/register'}>Register</Link>
    </div>
  );
};

export default Header;
