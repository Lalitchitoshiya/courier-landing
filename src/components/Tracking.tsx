'use client';

import React, { useState } from 'react';

const Tracking: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const trackPackage = () => {
    // Mock tracking
    if (trackingNumber) {
      setStatus('Your package is in transit and will be delivered by tomorrow.');
    } else {
      setStatus('Please enter a valid tracking number.');
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Track Your Package</h2>
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="tracking" className="block text-gray-700 text-sm font-bold mb-2">Tracking Number</label>
            <input
              type="text"
              id="tracking"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={trackPackage}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          >
            Track Package
          </button>
          {status && (
            <div className="text-center">
              <p className="text-lg">{status}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Tracking;