import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  let nameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();
  let confirmPasswordRef = useRef();
  let navigate = useNavigate();

  let arr = JSON.parse(localStorage.getItem('Ecom')) || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    if (!obj.name || !obj.email || !obj.password || !confirmPasswordRef.current.value) {
      return alert('Please fill all the fields');
    }

    if (obj.password !== confirmPasswordRef.current.value) {
      return alert('Passwords do not match');
    }

    let find = arr.find((ele) => ele.email === obj.email);
    if (find) {
      return alert('User already registered');
    } else {
      arr.push(obj);
      localStorage.setItem('Ecom', JSON.stringify(arr));
      navigate('/login');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-indigo-500">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-sm w-full">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Create an Account</h2>

        <form className="mt-6">
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            ref={nameRef}
            type="text"
            className="w-full px-4 py-2 mt-2 border border-gray-300 bg-gray-100 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
            placeholder="Enter your name"
          />

          <label className="block mt-4 text-sm font-medium text-gray-700">Email</label>
          <input
            ref={emailRef}
            type="email"
            className="w-full px-4 py-2 mt-2 border border-gray-300 bg-gray-100 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
            placeholder="Enter your email"
          />

          <label className="block mt-4 text-sm font-medium text-gray-700">Password</label>
          <input
            ref={passwordRef}
            type="password"
            className="w-full px-4 py-2 mt-2 border border-gray-300 bg-gray-100 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
            placeholder="Create a password"
          />

          <label className="block mt-4 text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            ref={confirmPasswordRef}
            type="password"
            className="w-full px-4 py-2 mt-2 border border-gray-300 bg-gray-100 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
            placeholder="Confirm your password"
          />

          <button
            onClick={handleSubmit}
            className="w-full mt-6 bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition font-semibold"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-700 mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-500 hover:underline font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
