import React, { useState } from 'react';
import EventCard from './EventCards'; 

const MyEventsPage = () => {
  const upcomingEvents = [
    { id: 1, title: 'Community Cleanup', date: '2025-05-01', organizer: 'City Council' },
    { id: 2, title: 'Web Development Workshop', date: '2025-06-15', organizer: 'Tech Meetup' }
  ];

  const completedEvents = [
    { id: 3, title: 'Tutoring Session', date: '2025-03-01', organizer: 'Local School' },
    { id: 4, title: 'Park Clean-up', date: '2025-02-15', organizer: 'Green Earth' }
  ];

  const [activeTab, setActiveTab] = useState('upcoming'); 

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="my-events-page max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">My Events</h2>

      <div className="tabs mb-4 flex justify-center space-x-6">
        <button 
          onClick={() => handleTabChange('upcoming')} 
          className={`py-2 px-4 rounded ${activeTab === 'upcoming' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Upcoming
        </button>
        <button 
          onClick={() => handleTabChange('completed')} 
          className={`py-2 px-4 rounded ${activeTab === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Completed
        </button>
      </div>

      <div className="events-list">
        {activeTab === 'upcoming' && upcomingEvents.length > 0 ? (
          upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} action="check-in" />
          ))
        ) : (
          <p className="text-center text-gray-500">No upcoming events available.</p>
        )}

        {activeTab === 'completed' && completedEvents.length > 0 ? (
          completedEvents.map((event) => (
            <EventCard key={event.id} event={event} action="feedback" />
          ))
        ) : (
          <p className="text-center text-gray-500">No completed events available.</p>
        )}
      </div>
    </div>
  );
};

export default MyEventsPage;
