import React from 'react';

const BadgeCard = ({ badge }) => {
  if (!badge) {
    return <div className="text-red-500">Badge data not available</div>;
  }

  return (
    <div className="badge-card bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl max-w-xs mx-auto">
      <img
        src={badge.image || 'https://via.placeholder.com/80'}
        alt={badge.name || 'Badge'}
        className="w-20 h-20 object-contain mx-auto mb-4 rounded-full border-4 border-blue-400"
      />
      <h4 className="text-xl font-semibold text-white mb-2">{badge.name || 'Unnamed Badge'}</h4>
      <p className="text-gray-200 text-sm">{badge.description || 'No description provided.'}</p>
    </div>
  );
};

export default BadgeCard;
