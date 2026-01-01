import { Link } from 'react-router-dom';
import { FaDroplet } from 'react-icons/fa6';

export default function Navbar() {
  return (
    <nav className="bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <FaDroplet className="h-8 w-8 text-white" />
              <span className="text-white text-2xl font-bold">Blood Bank</span>
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-gray-200 px-3 py-2 text-lg font-medium transition duration-150 ease-in-out"
            >
              Home
            </Link>
            <Link 
              to="/donate" 
              className="text-white hover:text-gray-200 px-3 py-2 text-lg font-medium transition duration-150 ease-in-out"
            >
              Donate
            </Link>
            <Link 
              to="/get-donation" 
              className="text-white hover:text-gray-200 px-3 py-2 text-lg font-medium transition duration-150 ease-in-out"
            >
              Get Donation
            </Link>
            <Link 
              to="/leader-boards" 
              className="text-white hover:text-gray-200 px-3 py-2 text-lg font-medium transition duration-150 ease-in-out"
            >
              Leaderboards
            </Link>
            
            {/* Sign Up Button */}
            <Link
              to="/signup"
              className="bg-white text-primary px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition duration-150 ease-in-out ml-4"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}