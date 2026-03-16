'use client';

import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [pickup, setPickup] = useState('');
  const [delivery, setDelivery] = useState('');
  const [weight, setWeight] = useState(0);
  const [quote, setQuote] = useState<number | null>(null);

  const calculateQuote = (event: React.FormEvent) => {
    event.preventDefault();

    if (weight <= 0) {
      setQuote(null);
      return;   
    }

    const basePrice = 100;
    const additionalPerKg = 15;
    const extraKg = Math.max(0, weight - 2);
    const totalPrice = basePrice + extraKg * additionalPerKg;

    setQuote(totalPrice);
  };

  return (
    <section className="relative bg-blue-600 text-white py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-10 h-64 w-64 rounded-full bg-white/10 backdrop-blur-sm animate-pulse" />
        <div className="absolute right-0 top-28 h-56 w-56 rounded-full bg-white/10 backdrop-blur-sm animate-pulse animation-delay-2000" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-white/10 backdrop-blur-sm animate-pulse animation-delay-4000" />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Send Packages Across Cities</h1>
        <p className="text-xl mb-8">Fast and reliable courier delivery</p>
        <form onSubmit={calculateQuote} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="pickup" className="block text-gray-700 text-sm font-bold mb-2">Pickup City</label>
            <select
              id="pickup"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            >
              <option value="">Select a city</option>
              <option value="Hindaun">Hindaun</option>
              <option value="Karuali">Karuali</option>
              <option value="Dausa">Dausa</option>
              <option value="Mahwa">Mahwa</option>
              <option value="Bandikui">Bandikui</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Gangapur">Gangapur</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="delivery" className="block text-gray-700 text-sm font-bold mb-2">Delivery City</label>
            <select
              id="delivery"
              value={delivery}
              onChange={(e) => setDelivery(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            >
              <option value="">Select a city</option>
              <option value="Hindaun">Hindaun</option>
              <option value="Karuali">Karuali</option>
              <option value="Dausa">Dausa</option>
              <option value="Mahwa">Mahwa</option>
              <option value="Bandikui">Bandikui</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Gangapur">Gangapur</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="weight" className="block text-gray-700 text-sm font-bold mb-2">Package Weight (kg)</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              min={0}
              step={0.1}
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Get Quote</button>
          {quote !== null && (
            <>
              <div className="mt-4 rounded-lg bg-blue-50 px-4 py-3 text-left text-blue-900">
                <p className="font-semibold">Estimated Price</p>
                <p className="text-lg">
                  ₹{quote.toFixed(2)}{' '}
                  <span className="text-sm text-blue-700">(Up to 2kg = ₹100, +₹15/kg beyond)</span>
                </p>
              </div>

              <div className="mt-4 rounded-lg bg-white px-4 py-3 text-left shadow-inner shadow-blue-200 text-blue-900">
                <p className="font-semibold">Need help booking?</p>
                <p className="text-sm text-blue-700">Chat with us on WhatsApp for instant support.</p>
                <p className="mt-1 text-sm font-medium text-blue-900">WhatsApp: <span className="text-black">+91 95878 76151</span></p>
                <a
                  href="https://wa.me/919587876151?text=Hi%20there%2C%20I%20need%20help%20with%20a%20courier%20quote%20for%20my%20package.%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                >
                  Open WhatsApp
                </a>
              </div>
            </>
          )}
        </form>

        <div className="mt-10 flex justify-center">
          <div className="flex items-center space-x-2 rounded-full bg-white/10 px-5 py-3 backdrop-blur-sm">
            <span className="text-2xl animate-bounce">📦</span>
            <span className="text-sm font-medium tracking-wide">Track and ship in minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;