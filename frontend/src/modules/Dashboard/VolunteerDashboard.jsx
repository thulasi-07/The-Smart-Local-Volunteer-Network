import React from 'react';
import Sidebar from './Sidebar';
import EventCard from '../Events/EventCard';


const matchedEvents = [
  {
    id: 3,
    title: 'River Clean-up Drive',
    description: 'Join hands to clean the river area.',
    location: 'Green River Park',
    date: '2025-05-25',
  },
  {
    id: 4,
    title: 'Community Garden Maintenance',
    description: 'Assist in maintaining a community garden.',
    location: 'Urban Garden Area',
    date: '2025-05-28',
  },
];

const VolunteerDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-60 p-8 bg-gray-100 w-full min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-indigo-700">Welcome Back, Volunteer! 🌟</h1>
        <h2 className="text-xl font-semibold mb-4">Recommended for You</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;
