import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaSearch, FaUserCheck, FaTrash } from "react-icons/fa";
import { AppContext } from "../../App";

interface WaitListItem {
  id: number;
  name: string;
  contactInfo: string;
  requiredBloodType: string;
  requestDate: string;
  status: "Pending" | "Matched" | "Completed";
}

export default function WaitList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [waitListItems, setWaitListItems] = useState([]);
  // Mock data - replace with actual API call
  const { token } = useContext(AppContext);

  const getWaitList = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_URL}/receivers`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(response.data);
    setWaitListItems(response.data);
  };
  useEffect(() => {
    getWaitList();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", searchTerm);
  };

  const handleMatch = (id: number) => {
    console.log("Match request:", id);
  };

  const handleDelete = async (id: number) => {
    console.log("Delete request:", id);
    const response = await axios.delete(`${import.meta.env.VITE_APP_URL}`);
    console.log(response.data);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING":
        return "text-yellow-600 bg-yellow-100";
      case "MATCHED":
        return "text-blue-600 bg-blue-100";
      case "COMPLETED":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-8">Wait List</h1>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search from this Wait List"
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

      {/* Wait List Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-pink-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Contact Information
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Required Blood Type
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Request Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {waitListItems?.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.phoneNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`px-2 py-1 rounded-full ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex space-x-3">
                    {item.status === "Pending" && (
                      <button
                        onClick={() => handleMatch(item.id)}
                        className="text-blue-600 hover:text-blue-800"
                        title="Match with donor"
                      >
                        <FaUserCheck className="h-5 w-5" />
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete request"
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
