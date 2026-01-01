import { useContext, useEffect, useState } from 'react';
import { FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios'
import { AppContext } from '../../App';

interface Donation {
  id: number;
  donorName: string;
  recipientName: string;
  donorBloodType: string;
  recipientBloodType: string;
  date: string;
}

export default function DonationList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [donations,setDonations]=useState([])
  const {token}=useContext(AppContext)
  const getDonations=async()=>{
    try{
    const response = await axios.get(
      `${import.meta.env.VITE_APP_URL}/donations`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log("hg",response.data);
    setDonations(response.data.data)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    getDonations()
  },[])


  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchTerm);
  };

  const handleUpdate = async (id: number) => {
    console.log('Update donation:', id);
    const response=await axios.put(`${import.meta.env.VITE_APP_URL}/donations/${id}`)
    console.log(response.data);
  };

  const handleDelete = async (id: number) => {
    console.log('Delete donation:', id);
    const response=await axios.delete(`${import.meta.env.VITE_APP_URL}/donations`)
    console.log(response.data);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-8">Donation List</h1>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search from this donation list"
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

      {/* Donation Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-pink-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Donor Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Recipient Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Donor Blood Type</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Recipient Blood Type</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {donations?.map((donation) => (
              <tr key={donation.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{donation.donorName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{donation.recipientName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{donation.donorBloodType}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{donation.recipientBloodType}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{donation.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleUpdate(donation.id)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaEdit className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(donation.id)}
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
    </div>
  );
}