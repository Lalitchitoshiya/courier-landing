'use client';

import React, { useState } from 'react';

const PriceCalculator: React.FC = () => {
  const [pickup, setPickup] = useState('');
  const [delivery, setDelivery] = useState('');
  const [weight, setWeight] = useState('');
  const [price, setPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    // Simple calculation: base price + weight * rate
    const basePrice = 10;
    const weightRate = 2;
    const calculatedPrice = basePrice + parseFloat(weight) * weightRate;
    setPrice(calculatedPrice);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Price Calculator</h2>
        <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="calc-pickup" className="block text-gray-700 text-sm font-bold mb-2">Pickup City</label>
            <input
              type="text"
              id="calc-pickup"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="calc-delivery" className="block text-gray-700 text-sm font-bold mb-2">Delivery City</label>
            <input
              type="text"
              id="calc-delivery"
              value={delivery}
              onChange={(e) => setDelivery(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="calc-weight" className="block text-gray-700 text-sm font-bold mb-2">Package Weight (kg)</label>
            <input
              type="number"
              id="calc-weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={calculatePrice}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          >
            Calculate Price
          </button>
          {price !== null && (
            <div className="text-center">
              <p className="text-lg font-semibold">Estimated Price: ${price.toFixed(2)}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;