import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../App";
import { API_BASE_URL } from "../config/api";

type DonateFormData = {
  name: string;
  email: string;
  bloodType: string;
  date: string;
};

export default function DonateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DonateFormData>();

  const { token } = useContext(AppContext);

  const onSubmit = async (data: DonateFormData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/donors`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

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
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium">Donor Name</label>
            <input
              className="mt-1 p-4 w-full rounded-md border"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="mt-1 p-4 w-full rounded-md border"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Blood Type */}
          <div>
            <label className="block text-sm font-medium">Blood Type</label>
            <select
              className="mt-1 p-4 w-full rounded-md border"
              {...register("bloodType", { required: true })}
            >
              <option value="">Select</option>
              {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(bt => (
                <option key={bt} value={bt}>{bt}</option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium">Date</label>
            <input
              type="date"
              className="mt-1 p-4 w-full rounded-md border"
              {...register("date", { required: true })}
            />
          </div>

          <button className="w-full bg-primary text-white py-3 rounded-full">
            Donate
          </button>
        </form>
      </div>
    </div>
  );
}

