import React, { useEffect, useState } from "react";
import axios from "axios";

const AchievementsPage = () => {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/achievements")
      .then(res => setBadges(res.data))
      .catch(err => console.log("Error fetching badges", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        Your Achievements
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {badges.map((badge, i) => (
          <div key={i} className={`p-4 rounded-lg shadow-md text-center transition hover:scale-105 
              ${badge.earned ? 'bg-green-100' : 'bg-gray-300 opacity-70'}`}>
            <div className="text-4xl mb-2">{badge.icon}</div>
            <h3 className="text-lg font-semibold">{badge.name}</h3>
            <p className="text-sm text-gray-700">{badge.description}</p>
            {!badge.earned && <p className="text-red-500 mt-1 text-xs">Locked</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsPage;
