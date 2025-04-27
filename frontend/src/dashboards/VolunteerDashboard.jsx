import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import Sidebar from './Sidebar';

const VolunteerDashboard = () => {
  const [events, setEvents] = useState([]);
  const [user, setUser] = useState({
    name: 'Thulasi',
    skills: ['Web Development', 'Design'],
    location: 'Bangalore',
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = [
          { id: 1, title: 'Community Cleanup', location: 'Bangalore', skillsRequired: ['Cleaning', 'Teamwork'] },
          { id: 2, title: 'Web Development Workshop', location: 'Bangalore', skillsRequired: ['Web Development'] },
        ];
        setEvents(fetchedEvents);
      } catch (err) {
        console.error('Error fetching events:', err);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row space-x-6 p-8">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Hi {user.name}, here are your recommended events!</h2>
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Recommended for You</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {events.length > 0 ? (
              events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))
            ) : (
              <p className="text-lg">Loading events...</p>
            )}
          </div>
        </div>
      </div>
      {/* Pass user object correctly to Sidebar */}
      <Sidebar user={user} />
    </div>
  );
};

export default VolunteerDashboard;
