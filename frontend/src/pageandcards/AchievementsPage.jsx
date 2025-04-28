import React from 'react';
import BadgeCard from './BadgeCard';

const AchievementsPage = () => {
    const badges = [
        {
          name: 'Helping Hand',
          description: 'Completed 5 events',
          image: '/images/helping-hand.jpg', 
        },
        {
          name: 'Community Star',
          description: 'Volunteered 50 hours',
          image: '/images/star.png',
        },
        {
          name: 'Skill Master',
          description: 'Used 3 different skills',
          image: '/images/skill master.png',
        },
      ];
      

  return (
    <div className="achievements-container min-h-screen bg-gradient-to-br from-indigo-900 to-blue-800 py-12 px-6 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">🎖 Your Achievements</h2>

      <div className="badges-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {badges.map((badge, index) => (
          <BadgeCard key={index} badge={badge} />
        ))}
      </div>
    </div>
  );
};

export default AchievementsPage;
