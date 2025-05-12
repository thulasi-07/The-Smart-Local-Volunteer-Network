import React from 'react';

const activities = [
  { id: 1, event: 'Beach Cleanup', date: '2025-04-10', status: 'Completed' },
  { id: 2, event: 'Park Maintenance', date: '2025-04-25', status: 'Completed' },
];

const ActivityLog = () => {
  return (
    <div className="p-8 bg-white min-h-screen">
      <h2 className="text-2xl font-bold text-indigo-600 mb-6">My Activity Log 📚</h2>
      <ul className="space-y-4">
        {activities.map(log => (
          <li
            key={log.id}
            className="border p-4 rounded-md shadow-sm bg-gray-50 hover:bg-gray-100"
          >
            <h3 className="font-semibold">{log.event}</h3>
            <p>Date: {log.date}</p>
            <p>Status: <span className="text-green-600">{log.status}</span></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;
