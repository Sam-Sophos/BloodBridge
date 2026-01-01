import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../App";

export default function GetDonationForm() {
  const {token}=useContext(AppContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_URL}/receivers`, data,{headers:{Authorization:`Bearer ${token}`}});
      console.log(response.data);
      alert("requested successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to requested.");
    }
  };

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Donation</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the blood donation you need quickly and efficiently. Our platform connects you 
            with willing donors in your area.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="receiverName" className="block text-sm font-medium text-gray-700">
                Receiver Name
              </label>
              <input
                type="text"
                id="receiverName"
                className={`mt-1 p-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm ${
                  errors.receiverName ? "border-red-500" : ""
                }`}
                placeholder="Enter your full name"
                {...register("name", { required: "Receiver name is required" })}
              />
              {errors.receiverName && (
                <p className="text-red-500 text-sm mt-1">{errors.receiverName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`mt-1 p-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700">
                Blood Type
              </label>
              <select
                id="bloodType"
                className={`mt-1 p-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm ${
                  errors.bloodType ? "border-red-500" : ""
                }`}
                {...register("type", { required: "Blood type is required" })}
              >
                <option value="">Select blood type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
              {errors.bloodType && (
                <p className="text-red-500 text-sm mt-1">{errors.bloodType.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className={`mt-1 p-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm ${
                  errors.phoneNumber ? "border-red-500" : ""
                }`}
                placeholder="Enter your phone number"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  // pattern: {
                  //   value: /^\+?[1-9]\d{1,14}$/,
                  //   message: "Invalid phone number",
                  // },
                })}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-light transition duration-300"
            >
              Join Wait List
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
