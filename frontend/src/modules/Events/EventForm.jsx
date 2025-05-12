import React, { useState } from 'react';

const EventForm = () => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    location: '',
    date: '',
  });

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Created:', eventData);
   
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-purple-700 text-center mb-4">
          Create an Event
        </h2>
        <input
          name="title"
          type="text"
          placeholder="Event Title"
          value={eventData.title}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-lg"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={eventData.description}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-lg"
          rows="3"
          required
        />
        <input
          name="location"
          type="text"
          placeholder="Location"
          value={eventData.location}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-lg"
          required
        />
        <input
          name="date"
          type="date"
          value={eventData.date}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-lg"
          required
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default EventForm;
