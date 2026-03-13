import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    { number: 1, title: 'Create Shipment', description: 'Enter your package details and get an instant quote.' },
    { number: 2, title: 'Courier Pickup', description: 'Our courier will pick up your package from your location.' },
    { number: 3, title: 'Fast Delivery', description: 'Your package is delivered quickly and safely.' },
    { number: 4, title: 'Live Tracking', description: 'Track your package in real-time.' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;