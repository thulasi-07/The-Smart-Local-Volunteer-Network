import React from 'react';

const leaders = [
  { id: 1, name: 'Asha R.', points: 980 },
  { id: 2, name: 'Manoj T.', points: 870 },
  { id: 3, name: 'Thulasi K.', points: 820 },
];

const LeaderboardPage = () => {
  return (
    <div className="p-8 min-h-screen bg-white">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">Leaderboard 🥇</h2>
      <table className="w-full bg-gray-50 rounded-lg shadow-md overflow-hidden">
        <thead className="bg-indigo-100 text-indigo-700">
          <tr>
            <th className="py-3 px-6 text-left">Rank</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Points</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((leader, index) => (
            <tr
              key={leader.id}
              className={`border-t ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}
            >
              <td className="py-3 px-6">{index + 1}</td>
              <td className="py-3 px-6 font-semibold">{leader.name}</td>
              <td className="py-3 px-6">{leader.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardPage;
