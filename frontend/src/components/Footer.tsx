import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Addresses */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Addresses</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>Ethiopia, Addis Ababa</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2" />
                <span>+251 911 223344</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>info@bloodbank.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/destinations" className="hover:text-gray-300">Destinations</a></li>
              <li><a href="/things-to-do" className="hover:text-gray-300">Things To Do</a></li>
              <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-gray-300"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-gray-300"><FaYoutube size={24} /></a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:border-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="w-full bg-white text-primary px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300"
              >
                Contact
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}