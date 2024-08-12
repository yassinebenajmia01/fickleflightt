import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

function Signup() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const { signup } = useAuth();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await signup(name, email, password);
      navigate('/contact'); 
    } catch (error) {
      console.error('Signup Error:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="bg-white shadow-md rounded-lg h-[700px] w-[1360px] flex">
      <div className="hidden md:flex w-1/2 items-center justify-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/ec69/a4e4/6c21d583fca24d9604b381d37a07ab34?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hZAZxzLZ3P4fe3IWZeiVPSOuPoEcwfdMUlDZJhufwuLqTbjh~p0fL6LnUrInhyHfCAN6G-IBWmLTMKkj5DIiBJ3upB48e1vZ9zhutYJ4mTYu8g8Mpxaqv5ZKyPQjCPc8yYe20wCPEVSABQxgUM9o1aVQ70BUWoI3T290b4WEjgku~fQPw6L~F2vh~U6iRCaUabHkuOPgOUHZtTCRVaOrRcjSDJCBbprTgT4GdpN-NQZJpHEJW49hV~N9hPLdgXo-B~q6IMrQQJCtDybVrFBkUevXP53bv1q3kw2ZcvOgCW1N6GrF0bTneZcx7ZggXl8Kji8ZdDFkfJmebXikKDudbg__"
          alt="Login Illustration"
          className="w-3/4"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col p-8">
        <h2 className="text-4xl font-bold text-green-500 mb-4">Register</h2>
        <p className="text-gray-400 mb-8 text-xl">JOIN TO US</p>
        <form className="w-full">
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">
              Your name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6 relative">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-[5%]">
              <button type="button" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="mb-6 relative">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-7">
              <button type="button" onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline"
              type="button" onClick={handleSignup}
            >
              REGISTER
            </button>
          </div>
        </form>
        <p className="text-gray-400 text-sm mt-4">
          ALREADY USER? <Link to="/login" className="text-green-500 hover:text-green-800 font-bold">LOGIN</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
