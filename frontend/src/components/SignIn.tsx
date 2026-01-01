import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import axios from 'axios';

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_URL}/signin`, data);
      console.log(response.data.data.token);
      window.localStorage.setItem("token",response.data.data.token)
      alert("Signed in successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to  signin.");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 animate-slideInLeft">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="relative">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="username"
                  {...register('username', { required: 'Username is required' })}
                  className={`pl-10 p-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm ${
                    errors.username ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter your username"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                )}
              </div>
            </div>

            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  id="password"
                  {...register('password', { required: 'Password is required' })}
                  className={`pl-10 p-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm ${
                    errors.password ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:text-blue-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Welcome Message */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary items-center justify-center animate-slideInRight">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold text-white mb-4">WELCOME BACK!</h1>
          <p className="text-white text-lg">
            Every drop of blood you donate is a lifeline for someone in need. 
            Your generosity creates ripples of hope in our community.
          </p>
        </div>
      </div>
    </div>
  );
}
