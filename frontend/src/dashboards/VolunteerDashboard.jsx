import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';  
import Sidebar from './Sidebar';      

const VolunteerDashboard = () => {
  const [events, setEvents] = useState([]); 
  const [user, setUser] = useState({
    name: 'Thulasi', 
    volunteeredHours: 50, 
    skills: ['Web Development', 'Design'], 
    location: 'Bangalore' 
  });

  useEffect(() => {
    
    const fetchedEvents = [
      { id: 1, title: 'Community Cleanup', location: 'Bangalore', skillsRequired: ['Cleaning', 'Teamwork'], match: 90 },
      { id: 2, title: 'Web Development Workshop', location: 'Bangalore', skillsRequired: ['Web Development'], match: 95 },
      { id: 3, title: 'Tutoring Session', location: 'Chennai', skillsRequired: ['Teaching', 'Patience'], match: 70 },
    ];
    setEvents(fetchedEvents);
  }, []);

  return (
    <div className="dashboard bg-gray-100 min-h-screen flex">
      <div className="sidebar-container w-1/4 p-6 bg-white shadow-lg rounded-lg">
        <Sidebar user={user} />
      </div>

      <div className="content-container w-3/4 p-8">
        <div className="dashboard-header text-center mb-8">
          <h2 className="text-3xl font-semibold text-indigo-700">
            Hi {user.name} 👋, here are your recommended events!
          </h2>
        </div>

        <div className="recommended-for-you">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">Recommended for You</h3>
          <div className="event-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map(event => (
              <EventCard
                key={event.id}
                event={event}
                userSkills={user.skills}
                userLocation={user.location}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;
