import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Donate blood and save your people.
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Join our community of donors and make a difference in someone's life. 
              Every donation counts and can save up to three lives.
            </p>
            <div className="space-x-4">
              <Link to='/donate'><button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-light transition duration-300">
                Donate
              </button></Link>
              <Link to='/get-donation'><button className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition duration-300">
                Get Donation
              </button></Link>
            </div>
          </div>
          <div className="md:block">
            <img 
              src="https://miro.medium.com/v2/resize:fit:1400/1*LrRIFrplsmGYko_JImnUHw.jpeg" 
              alt="Blood donation illustration" 
              className="w-full h-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
}