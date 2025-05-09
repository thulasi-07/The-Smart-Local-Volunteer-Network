import React from 'react';

const LeaderboardPage = () => {
  const leaderboardData = [
    { rank: 1, name: 'Thulasi', hours: 95 },
    { rank: 2, name: 'Ajay', hours: 87 },
    { rank: 3, name: 'Riya', hours: 80 },
    { rank: 4, name: 'Ankit', hours: 76 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 to-indigo-900 py-12 px-6 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">🏆 Volunteer Leaderboard</h2>

      <div className="overflow-x-auto max-w-4xl mx-auto">
        <table className="w-full table-auto border-collapse rounded-lg shadow-md overflow-hidden bg-white/10 backdrop-blur-md text-white">
          <thead>
            <tr className="bg-purple-700 text-left text-sm uppercase">
              <th className="px-6 py-4">Rank</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Hours Volunteered</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((user, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-white/5' : 'bg-white/10'
                } hover:bg-purple-600 transition-colors`}
              >
                <td className="px-6 py-4 font-semibold">{user.rank}</td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardPage;
