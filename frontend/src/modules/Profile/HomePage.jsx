import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600 flex flex-col items-center justify-center p-4 text-white">
       <h1 className="text-2xl font-bold">Welcome {user ? user.name : "Guest"}!</h1>
      <p className="text-lg mb-6">You're logged in as a <span className="font-semibold capitalize">{user?.role}</span></p>

      <div className="space-x-4">
        {user?.role === 'organizer' ? (
          <button
            onClick={() => navigate('/create-event')}
            className="bg-white text-indigo-700 px-6 py-2 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Create Event
          </button>
        ) : (
          <button
            onClick={() => navigate('/volunteer-dashboard')}
            className="bg-white text-indigo-700 px-6 py-2 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Volunteer Dashboard
          </button>
        )}
        <button
          onClick={() => navigate('/profile')}
          className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-indigo-600 transition"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default HomePage;
