import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Create Shipment',
      description: 'Enter your package details and get an instant quote.',
      bgImage: 'YOUR_IMAGE_URL_FOR_STEP_1_HERE' // Replace with direct image URL
    },
    {
      number: 2,
      title: 'Courier Pickup',
      description: 'Our courier will pick up your package from your location.',
      bgImage: 'YOUR_IMAGE_URL_FOR_STEP_2_HERE' // Replace with direct image URL
    },
    {
      number: 3,
      title: 'Fast Delivery',
      description: 'Your package is delivered quickly and safely.',
      bgImage: 'YOUR_IMAGE_URL_FOR_STEP_3_HERE' // Replace with direct image URL
    },
    {
      number: 4,
      title: 'Live Tracking',
      description: 'Track your package in real-time.',
      bgImage: 'YOUR_IMAGE_URL_FOR_STEP_4_HERE' // Replace with direct image URL
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative text-center bg-cover bg-center rounded-lg shadow-lg overflow-hidden h-80 flex flex-col justify-end"
              style={{ backgroundImage: `url(${step.bgImage})` }}
            >
              <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>
              <div className="relative z-10 p-6 text-white">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-200">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;