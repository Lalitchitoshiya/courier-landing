import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Send Packages Across Cities</h1>
        <p className="text-xl mb-8">Fast and reliable courier delivery</p>
        <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="pickup" className="block text-gray-700 text-sm font-bold mb-2">Pickup City</label>
            <input type="text" id="pickup" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="delivery" className="block text-gray-700 text-sm font-bold mb-2">Delivery City</label>
            <input type="text" id="delivery" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="weight" className="block text-gray-700 text-sm font-bold mb-2">Package Weight (kg)</label>
            <input type="number" id="weight" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Get Quote</button>
        </form>
      </div>
    </section>
  );
};

export default Hero;