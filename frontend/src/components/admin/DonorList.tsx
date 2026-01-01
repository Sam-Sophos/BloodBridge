import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import { AppContext } from '../../App';

interface Donor {
  id: number;
  name: string;
  bloodType: string;
  lastDonationDate: string;
  donationFrequency: string;
}

export default function DonorList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [donors, setDonors] = useState<Donor[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDonor, setSelectedDonor] = useState<Donor | null>(null);
  const {token}=useContext(AppContext)
  console.log(token)

  const getDonor = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_URL}/donors`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setDonors(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDonor();
  }, []);

  const handleUpdate = async (id: number) => {
    const donorToUpdate = donors.find((donor) => donor.id === id);
    if (donorToUpdate) {
      setSelectedDonor(donorToUpdate);
      setShowModal(true);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`${import.meta.env.VITE_APP_URL}/donors/${id}`);
      setDonors((prev) => prev.filter((donor) => donor.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalSubmit = async () => {
    if (selectedDonor) {
      try {
        const response = await axios.put(
          `${import.meta.env.VITE_APP_URL}/donors/${selectedDonor.id}`,
          selectedDonor
        );
        setDonors((prev) =>
          prev.map((donor) => (donor.id === selectedDonor.id ? response.data : donor))
        );
        setShowModal(false);
        setSelectedDonor(null);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-8">Donor List</h1>

      {/* Search Bar */}
      <form className="mb-8">
        <div className="flex max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search from this Donor List"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border-2 border-pink-200 rounded-l-lg focus:outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white rounded-r-lg hover:bg-primary-light transition-colors duration-200"
          >
            <FaSearch />
          </button>
        </div>
      </form>

      {/* Donor Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-pink-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Blood Type</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Last Donation Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Donation Frequency</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {donors?.map((donor) => (
              <tr key={donor.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{donor.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{donor.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{donor.bloodType}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{donor.email}</td>
                
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleUpdate(donor.id)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaEdit className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(donor.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && selectedDonor && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-xl font-bold mb-4">Update Donor</h2>
            <form>
              <label className="block mb-2 font-medium">Last Donation Date</label>
              <input
                type="date"
                value={selectedDonor.lastDonationDate}
                onChange={(e) =>
                  setSelectedDonor({ ...selectedDonor, lastDonationDate: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg mb-4"
              />
              <label className="block mb-2 font-medium">Donation Frequency</label>
              <input
                type="text"
                value={selectedDonor.donationFrequency}
                onChange={(e) =>
                  setSelectedDonor({ ...selectedDonor, donationFrequency: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg mb-4"
              />
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleModalSubmit}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
