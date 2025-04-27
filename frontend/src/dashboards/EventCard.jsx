import React from 'react';

const EventCard = ({ event }) => {
  if (!event) {
    return <p>Event not available</p>; // You can show a placeholder if event is not available
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-2">{event?.title || 'No Title'}</h3>
      <p className="text-gray-700 mb-2">{event?.location || 'Location not specified'}</p>
      <p className="text-gray-500 mb-4">
        Skills Required: {event?.skillsRequired?.join(', ') || 'No skills required'}
      </p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
        Join Event
      </button>
    </div>
  );
};

export default EventCard;
