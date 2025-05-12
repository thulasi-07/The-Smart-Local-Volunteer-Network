import React from 'react';

const BadgeCard = ({ badge }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 text-center hover:shadow-xl transition duration-300">
      <img
        src={badge.icon}
        alt={badge.title}
        className="w-16 h-16 mx-auto mb-4"
      />
      <h3 className="text-lg font-semibold text-indigo-700">{badge.title}</h3>
      <p className="text-sm text-gray-500">{badge.description}</p>
    </div>
  );
};

export default BadgeCard;
