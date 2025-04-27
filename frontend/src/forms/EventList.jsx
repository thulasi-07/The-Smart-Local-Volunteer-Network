import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events');
        setEvents(response.data);
      } catch (err) {
        console.error('Error fetching events:', err);
      }
    };
    fetchEvents();
  }, []);

  const handleJoinEvent = async (eventId) => {
    if (!user) {
      alert('Please log in to join events');
      return;
    }

    try {
      await axios.post(`http://localhost:5000/api/events/join/${eventId}`, { userId: user._id });
      alert('Successfully joined the event!');
    } catch (err) {
      console.error('Error joining event:', err);
      alert('Failed to join event');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Available Volunteer Events</h2>
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event._id} className="event-item mb-6 p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-700 mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-2">{event.description}</p>
              <p className="text-sm text-gray-500"><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
              <p className="text-sm text-gray-500"><strong>Location:</strong> {event.location}</p>
              <p className="text-sm text-gray-500"><strong>Skills Needed:</strong> {event.skillsNeeded.join(', ')}</p>
              <button
                onClick={() => handleJoinEvent(event._id)}
                className="mt-4 w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none"
              >
                Join Event
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No events available at the moment. Please check back later!</p>
        )}
      </div>
    </div>
  );
};

export default EventList;
