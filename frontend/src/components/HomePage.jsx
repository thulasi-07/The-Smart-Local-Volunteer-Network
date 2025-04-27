import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = ({ user }) => {
  const [opportunities, setOpportunities] = useState([]);

 
  useEffect(() => {
    if (user) {
      axios
        .get('http://localhost:5000/api/opportunities', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          setOpportunities(response.data);
        })
        .catch((error) => console.error('Error fetching opportunities:', error));
    }
  }, [user]);

  return (
    <div className="bg-gradient-to-l from-indigo-600 via-purple-500 to-pink-500 min-h-screen text-white">
      
      <header className="text-center py-16">
        <h1 className="text-5xl font-bold tracking-wide text-white mb-4">
          Welcome to the Smart Local Volunteer Network
        </h1>
        <p className="text-xl font-medium text-white">Connect with local opportunities and make a positive impact in your community.</p>
      </header>

     
      <section className="px-6 py-12 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-white mb-6">
          Join us and help make the world a better place!
        </h2>
        <p className="text-lg text-white mb-8">
          The Smart Local Volunteer Network allows you to engage with local causes, find opportunities that match your interests, and make a meaningful impact. Whether you want to help out at a local event or tutor kids, you can find something that matters to you!
        </p>
      </section>

      
      {user ? (
        <>
         
          <section className="bg-white text-gray-800 p-8 rounded-xl shadow-lg mx-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6">Welcome back, {user.name}!</h3>
            <p className="text-lg text-gray-700 mb-6">Here are some volunteer opportunities that might interest you:</p>

           
            <ul className="space-y-6">
              {opportunities.length > 0 ? (
                opportunities.map((opp) => (
                  <li
                    key={opp._id}
                    className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:scale-105"
                  >
                    <h4 className="text-xl font-semibold text-gray-800">{opp.title}</h4>
                    <p className="text-sm text-gray-600">{opp.description}</p>
                    <Link
                      to={`/opportunity/${opp._id}`}
                      className="text-blue-600 mt-4 inline-block hover:underline"
                    >
                      View Opportunity
                    </Link>
                  </li>
                ))
              ) : (
                <p className="text-gray-500">No opportunities available right now. Please check back later!</p>
              )}
            </ul>
          </section>
        </>
      ) : (
        <>
         
          <section className="bg-white text-center p-8 rounded-xl shadow-lg mx-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6">Not a volunteer yet?</h3>
            <p className="text-lg text-gray-700 mb-6">Join us today and start making an impact in your community!</p>
            <div className="flex justify-center space-x-6">
              <Link
                to="/register"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="bg-purple-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-purple-700 transition duration-300"
              >
                Login
              </Link>
            </div>
          </section>
        </>
      )}

      
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <p className="text-center text-sm">© 2025 Smart Local Volunteer Network. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
