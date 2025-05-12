import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './authStyles.css';


const Register = () => {
  const [role, setRole] = useState('volunteer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log({ name, email, password, role });

    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-yellow-500">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-xl shadow-lg w-96 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-pink-600">Register</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
        <div className="flex items-center justify-between">
          <label className="text-gray-700 font-medium">Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="volunteer">Volunteer</option>
            <option value="organizer">Organizer</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
