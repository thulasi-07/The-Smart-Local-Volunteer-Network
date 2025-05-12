import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthContext';

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md space-y-4 text-gray-800">
        <h2 className="text-2xl font-bold text-center text-teal-600">My Profile</h2>
        <div className="space-y-2">
          <p><span className="font-semibold">Name:</span> {user?.name || 'N/A'}</p>
          <p><span className="font-semibold">Email:</span> example@email.com</p>
          <p><span className="font-semibold">Role:</span> {user?.role}</p>
        </div>
        <div className="text-center">
          <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
