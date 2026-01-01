export default function HowToDonate() {
  return (
    <div>
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">How to Donate</h2>
            <p className="mb-4">Donating blood is a simple yet life-saving act that takes just a few steps. First, find a nearby donation center or blood drive through our platform and schedule an appointment. Upon arrival, a quick health screening will ensure you’re eligible to donate, followed by a safe and painless blood draw that usually takes less than 15 minutes.</p>
            <p>
            </p>
            <p>After donating, take a few minutes to rest and hydrate while knowing you've made a real difference. Your donation will be processed and sent to those in need, saving lives in hospitals and emergency situations. Join us today and be a hero—because every drop counts!</p>


            
            <button className="mt-8 bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-light transition duration-300">
              Donate
            </button>
          </div>
          <div>
            <img 
              src="https://img.freepik.com/free-vector/smartphone-online-charity-donation_24877-54450.jpg?t=st=1738067823~exp=1738071423~hmac=d2e551793a4d90f43f59ab6754d0b84782b9cc40bd978ccc1d92af1953c1e6cb&w=360" 
              alt="Blood donation process" 
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
      <div className="bg-secondary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
            <div className="space-y-4 text-gray-600">
              <p >
                At Blood Bank, we are dedicated to saving lives by connecting blood donors with those in urgent need. Our platform makes the donation process seamless, allowing individuals to give and receive blood efficiently. We strive to create a community where donating blood is easy, accessible, and impactful, ensuring that no one has to struggle to find a life-saving donation.
              </p>
            
              <p>
                With a growing network of donors and medical institutions, we aim to bridge the gap between supply and demand. Whether you're looking to donate blood or need a donation yourself, our platform simplifies the process, making it quicker and more reliable. Together, we can make a difference—because every drop counts!
              </p>
             
            </div>
            
          </div>
          <div>
            <img 
              src="https://static1.bigstockphoto.com/5/5/2/large1500/255455356.jpg" 
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