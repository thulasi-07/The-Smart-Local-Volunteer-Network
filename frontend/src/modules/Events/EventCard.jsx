import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleJoin = () => {
    alert('You have joined this event! 🎉');
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between space-y-2">
      <h3 className="text-xl font-bold text-indigo-700">{event.title}</h3>
      <p>{event.description}</p>
      <p className="text-sm text-gray-600">
        📍 {event.location} | 🗓️ {event.date}
      </p>
      <div className="flex justify-between mt-2">
        <button
          onClick={handleJoin}
          className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700"
        >
          Join
        </button>
        <button
          onClick={() => navigate(`/share/${event.id}`)}
          className="border border-indigo-600 text-indigo-600 px-3 py-1 rounded hover:bg-indigo-50"
        >
          Share
        </button>
      </div>
    </div>
  );
};

export default EventCard;
