import React from 'react';
import EventCard from './EventCard';

const mockEvents = [
  {
    id: 1,
    title: 'Beach Cleanup',
    description: 'Help clean the beach area.',
    date: '2025-05-20',
    location: 'Coastal Beach',
  },
  {
    id: 2,
    title: 'Tree Planting',
    description: 'Join us to plant trees!',
    date: '2025-05-22',
    location: 'City Park',
  },
];

const EventList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-cyan-300 to-blue-500 p-6">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">Upcoming Events</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
