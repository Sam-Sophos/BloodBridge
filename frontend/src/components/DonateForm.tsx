import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../App";

type DonateFormData = {
  name: string;
  email: string;
  bloodType: string;
  date: string;
};

export default function DonateForm() {
  const { token } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DonateFormData>();

  const onSubmit = async (data: DonateFormData) => {
    if (!token) {
      alert("You must be logged in to donate.");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_URL}/donors`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit donation");
      }

      alert("Thank you for your donation!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">
          Donate and Save Lives
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-gray-50 p-8 rounded-lg shadow"
        >
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              className="mt-1 w-full p-3 border rounded"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="mt-1 w-full p-3 border rounded"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Blood Type</label>
            <select
              className="mt-1 w-full p-3 border rounded"
              {...register("bloodType", {
                required: "Blood type is required",
              })}
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
              <p className="text-red-500 text-sm">
                {errors.bloodType.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Donation Date</label>
            <input
              type="date"
              className="mt-1 w-full p-3 border rounded"
              {...register("date", { required: "Date is required" })}
            />
            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white py-3 rounded hover:opacity-90 disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Donate"}
          </button>
        </form>
      </div>
    </div>
  );
}
