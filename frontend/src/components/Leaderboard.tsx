export default function Leaderboard() {
  const topDonors = [
    { name: "John Doe", donations: 15, amount: "7.5L", rank: 1 },
    { name: "Jane Smith", donations: 12, amount: "6L", rank: 2 },
    { name: "Mike Johnson", donations: 10, amount: "5L", rank: 3 },
    { name: "Sarah Williams", donations: 8, amount: "4L", rank: 4 },
    { name: "David Brown", donations: 6, amount: "3L", rank: 5 },
  ];

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Top Donors, Heroes of the year
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrating our amazing donors who have made a significant impact in saving lives
            through their generous blood donations.
          </p>
        </div>

        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-pink-50">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        Name
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Number of Donations
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Total Donated Amount
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Rank
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {topDonors.map((donor) => (
                      <tr key={donor.name}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {donor.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {donor.donations}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {donor.amount}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          #{donor.rank}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-light transition duration-300"
          >
            Donate and be a Hero
          </button>
        </div>
      </div>
    </div>
  );
}