import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../App";

export default function DonateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {token}=useContext(AppContext)

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_URL}/donors`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization":`Bearer ${token}`
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const result = await response.json();
      console.log("Success:", result);
      alert("Thank you for your donation!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit donation.");
    }
  }

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Donate and save peoples life
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our community of donors and help save lives. Your donation can make a significant
            difference in someone's life.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="donorName" className="block text-sm font-medium text-gray-700">
                Donor Name
              </label>
              <input
                type="text"
                id="donorName"
                className={`mt-1 p-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm ${
                  errors.donorName ? "border-red-500" : ""
                }`}
                placeholder="Enter your full name"
                {...register("name", { required: "Donor name is required" })}
              />
              {errors.donorName && (
                <p className="text-red-500 text-sm mt-1">{errors.donorName.message}</p>
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
                {...register("bloodType", { required: "Blood type is required" })}
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
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                id="date"
                className={`mt-1 p-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm ${
                  errors.date ? "border-red-500" : ""
                }`}
                {...register("date", { required: "Date is required" })}
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-light transition duration-300"
            >
              Donate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}