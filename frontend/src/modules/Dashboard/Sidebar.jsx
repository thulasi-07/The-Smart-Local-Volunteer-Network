import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaStar, FaClipboardList } from 'react-icons/fa';


const Sidebar = () => {
  return (
    <div className="bg-indigo-800 text-white min-h-screen w-60 p-6 space-y-6 fixed left-0 top-0">
      <h2 className="text-2xl font-bold mb-4">Volunteer Panel</h2>
      <nav className="flex flex-col space-y-4">
        <NavLink to="/volunteer" className="hover:text-yellow-300 flex items-center gap-2">
          <FaHome /> Dashboard
        </NavLink>
        <NavLink to="/myevents" className="hover:text-yellow-300 flex items-center gap-2">
          <FaClipboardList /> My Events
        </NavLink>
        <NavLink to="/achievements" className="hover:text-yellow-300 flex items-center gap-2">
          <FaStar /> Achievements
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
