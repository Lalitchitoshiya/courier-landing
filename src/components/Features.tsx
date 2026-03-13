import React from 'react';

const Features: React.FC = () => {
  const features = [
    { title: 'Fast Delivery', description: 'Get your packages delivered quickly across cities.', icon: '🚚' },
    { title: 'Secure Packaging', description: 'Your packages are handled with care and security.', icon: '📦' },
    { title: 'Real-time Tracking', description: 'Track your package every step of the way.', icon: '📍' },
    { title: 'Affordable Pricing', description: 'Competitive rates for all your delivery needs.', icon: '💰' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;