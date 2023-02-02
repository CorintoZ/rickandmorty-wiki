import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

import { registerUser } from '../../../services/api.service';

const RegisterWrapper = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const cookies = new Cookies();
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const user = { email, password };

    await registerUser(user).then((res) => {
      cookies.set('TOKEN', res.token);
      navigate('/');
    });
  };

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };
  return (
    <section className="h-full container">
      <div>
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <img
            src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-moon-mod-download-35.png"
            alt="rick-morty-login"
          />
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <h1 className="text-2xl font-bold mb-4">Register</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                disabled={!validateForm()}
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterWrapper;
