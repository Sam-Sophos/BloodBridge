import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_URL}/signup`, data);
    
      console.log(response.data.data.token);
      window.localStorage.setItem("token",response.data.data.token)
      alert("Account created successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create an account.");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary items-center justify-center animate-slideInLeft">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold text-white mb-4">WELCOME BACK!</h1>
          <p className="text-white text-lg">
            Join our community of heroes who save lives through blood donation. 
            Your contribution can make a difference in someone's life today.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center p-8 animate-slideInRight">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Create Account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  className={`pl-10 p-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your name"
                  {...register("name", { required: "Name is required" })}
                />
              </div>
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="username"
                  id="username"
                  className={`pl-10 p-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your email"
                  {...register("username", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
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
                  className={`pl-10 p-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your password"
                  {...register("password", { required: "Password is required" })}
                />
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
