import { Link, useLocation, Outlet } from 'react-router-dom';

export default function AdminLayout() {
  const location = useLocation();

  const navItems = [
    { path: '/admin/donations', label: 'Donation List' },
    { path: '/admin/donors', label: 'Donor List' },
    { path: '/admin/waitlist', label: 'Waitlist' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Horizontal Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h2 className="text-2xl font-bold text-primary">Admin Panel</h2>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors duration-200
                      ${location.pathname === item.path 
                        ? 'border-primary text-primary' 
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}