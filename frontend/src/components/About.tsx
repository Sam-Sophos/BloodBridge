export default function About() {
  return (
    <div>
    <div className="bg-secondary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet the Top Donor</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Our platform connects blood donors with those in need, creating a seamless
                and efficient donation process that saves lives.
              </p>
              <p>
                We maintain strict quality standards and verification processes to ensure
                safe and reliable blood donation services.
              </p>
              <p>
                Join our growing community of donors and be part of a noble cause that
                makes a real difference in people's lives.
              </p>
            </div>
            <button className="mt-8 bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-light transition duration-300">
              Leader Board
            </button>
          </div>
          <div>
            <img 
              src="https://thebloodconnection.org/wp-content/uploads/2024/01/TBC-DecBlogImages-StoriesOfLives-2.jpg" 
              alt="Medical professional" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}