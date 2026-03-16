import React from 'react';

const CustomerFeedback: React.FC = () => {
  const feedbacks = [
    {
      name: 'Rajesh Kumar',
      location: 'Jaipur',
      rating: 5,
      comment: 'Excellent service! My package was delivered on time and in perfect condition. Highly recommend!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Priya Sharma',
      location: 'Dausa',
      rating: 5,
      comment: 'Fast and reliable delivery. The tracking feature is amazing. Will use again!',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Amit Singh',
      location: 'Bandikui',
      rating: 4,
      comment: 'Good service overall. Package arrived a bit late but was well-packaged.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedbacks.map((feedback, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={feedback.avatar}
                  alt={feedback.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{feedback.name}</h3>
                  <p className="text-sm text-gray-600">{feedback.location}</p>
                </div>
              </div>
              <div className="mb-4">
                {renderStars(feedback.rating)}
              </div>
              <p className="text-gray-700 italic">"{feedback.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;