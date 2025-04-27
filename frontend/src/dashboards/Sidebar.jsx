import React from 'react';

const Sidebar = ({ user }) => {
  if (!user) {
    return <div>Loading...</div>; // or a fallback UI while the user data is not available
  }

  return (
    <div className="sidebar p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{user.name || 'Guest'}</h3>
      <p className="text-gray-500">Location: {user.location || 'Unknown'}</p>
      <p className="text-gray-500">Skills: {user.skills?.join(', ') || 'No skills specified'}</p>
    </div>
  );
};

export default Sidebar;
