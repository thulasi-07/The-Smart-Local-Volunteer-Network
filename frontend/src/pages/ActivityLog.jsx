import React from 'react';

const ActivityLog = ({ events = [] }) => {  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h3 className="text-3xl font-semibold mb-6 text-center">Activity Log</h3>

      <div className="timeline space-y-6">
        {events.map((event, index) => (
          <div key={index} className="timeline-item flex items-start">
            <div className="timeline-dot w-4 h-4 bg-blue-500 rounded-full mr-4 mt-1"></div>
            <div className="timeline-content">
              <h4 className="text-lg font-semibold">{event.title}</h4>
              <p className="text-sm text-gray-600">{event.date} - <span className="text-gray-900">{event.status}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;
