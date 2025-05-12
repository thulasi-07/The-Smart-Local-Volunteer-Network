import React from 'react';
import EventCard from '../Events/EventCard';

const joinedEvents = [
  {
    id: 7,
    title: 'Tree Planting',
    description: 'Plant trees to restore the environment',
    location: 'City Garden',
    date: '2025-05-20',
  },
  {
    id: 8,
    title: 'Blood Donation Camp',
    description: 'Donate blood to save lives!',
    location: 'Community Hall',
    date: '2025-05-22',
  },
];

const MyEventPage = () => {
  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">My Participations 📝</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {joinedEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default MyEventPage;
