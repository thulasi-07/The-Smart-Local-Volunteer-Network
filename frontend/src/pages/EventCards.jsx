import React from 'react';

const EventCard = ({ event, action }) => {
  
  if (!event) {
    return <div className="error text-center text-red-500">Event data is missing</div>;
  }

  return (
    <div className="event-card mb-6 p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
      <p className="text-gray-600 mb-2">{event.date}</p>
      <p className="text-gray-600 mb-4">{event.organizer}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
        {action === 'check-in' ? 'Check In' : 'Leave Feedback'}
      </button>
    </div>
  );
};

export default EventCard;
