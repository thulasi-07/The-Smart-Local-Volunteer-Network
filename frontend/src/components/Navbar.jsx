// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <h2 className="text-white text-2xl font-bold tracking-wide">Smart Volunteer</h2>
//           <ul className="hidden md:flex space-x-6 text-white font-medium">
//             <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
//             <li><Link to="/register" className="hover:text-yellow-300">Register</Link></li>
//             <li><Link to="/login" className="hover:text-yellow-300">Login</Link></li>
//             <li><Link to="/profile" className="hover:text-yellow-300">Profile</Link></li>
//             <li><Link to="/evenform" className="hover:text-yellow-300">Create Event</Link></li>
//             <li><Link to="/eventlist" className="hover:text-yellow-300">Events</Link></li>
//             <li><Link to="/volunteerdashboard" className="hover:text-yellow-300">Dashboard</Link></li>


//             <li><Link to="/myeventpage" className="hover:text-yellow-300">My Events</Link></li>
//             <li><Link to="/activity-log" className="hover:text-yellow-300">Activity Log</Link></li>
//             <li><Link to="/feedbackpage" className="hover:text-yellow-300">FeedBack</Link></li>
//             <li><Link to="/eventcards" className="hover:text-yellow-300">Event-cards</Link></li>


//             <li><Link to="/achievementspage" className="hover:text-yellow-300">Achievements</Link></li>
//             <li><Link to="/leaderboardpage" className="hover:text-yellow-300">Leaderboard</Link></li>
//             <li><Link to="/badgecard" className="hover:text-yellow-300">Badge-card</Link></li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  if (isAuthPage) return null; 

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/home" className="text-2xl font-bold text-indigo-600">
          SmartVolunteer
        </Link>

        <div className="flex items-center space-x-6">
          <Link
            to="/dashboard"
            className="text-gray-600 hover:text-indigo-600 transition font-medium"
          >
            Dashboard
          </Link>
          <Link
            to="/events"
            className="text-gray-600 hover:text-indigo-600 transition font-medium"
          >
            Events
          </Link>
          <Link
            to="/achievements"
            className="text-gray-600 hover:text-indigo-600 transition font-medium"
          >
            Achievements
          </Link>
          <Link
            to="/leaderboard"
            className="text-gray-600 hover:text-indigo-600 transition font-medium"
          >
            Leaderboard
          </Link>
          <Link
            to="/profile"
            className="text-gray-600 hover:text-indigo-600 transition font-medium"
          >
            Profile
          </Link>
          <Link
            to="/login"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

