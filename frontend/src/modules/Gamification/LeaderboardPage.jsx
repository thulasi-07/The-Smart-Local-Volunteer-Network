import React, { useEffect, useState } from "react";
import axios from "axios";

const LeaderboardPage = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/leaderboard")
      .then(res => setLeaders(res.data))
      .catch(err => console.error("Error fetching leaderboard", err));
  }, []);

  return (
    <div className="min-h-screen bg-white py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">🏆 Leaderboard</h2>

      <div className="max-w-3xl mx-auto">
        <table className="w-full table-auto border-collapse shadow-md">
          <thead>
            <tr className="bg-purple-100 text-left">
              <th className="p-3">Rank</th>
              <th className="p-3">Name</th>
              <th className="p-3">Events</th>
              <th className="p-3">Points</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((user, index) => (
              <tr key={index} className="border-t hover:bg-purple-50 transition">
                <td className="p-3 font-semibold">{index + 1}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.eventsCompleted}</td>
                <td className="p-3">{user.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardPage;
