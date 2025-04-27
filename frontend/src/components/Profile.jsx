import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});

  
  const token = localStorage.getItem("token");

  
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/users/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(res.data);
        setFormData(res.data);
      } catch (err) {
        console.log("Error fetching profile:", err);
      }
    };
    fetchProfile();
  }, [token]);

 
  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  
  const handleSave = async () => {
    try {
      await axios.put('http://localhost:5000/api/users/profile', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(formData);
      setEditMode(false);
      alert('Profile updated successfully!');
    } catch (err) {
      console.log('Error updating:', err);
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>👤 Profile</h2>
      <div>
        <label>Name: </label>
        {editMode ? <input name="name" value={formData.name} onChange={handleChange} /> : <span>{user.name}</span>}
      </div>

      <div>
        <label>Email: </label>
        <span>{user.email}</span>
      </div>

      <div>
        <label>Role: </label>
        <span>{user.role}</span>
      </div>

      {user.role === 'volunteer' && (
        <>
          <div>
            <label>Skills: </label>
            {editMode
              ? <input name="skills" value={formData.skills.join(',')} onChange={e => handleChange({ target: { name: 'skills', value: e.target.value.split(',') } })} />
              : <span>{user.skills.join(', ')}</span>}
          </div>

          <div>
            <label>Interests: </label>
            {editMode
              ? <input name="interests" value={formData.interests.join(',')} onChange={e => handleChange({ target: { name: 'interests', value: e.target.value.split(',') } })} />
              : <span>{user.interests.join(', ')}</span>}
          </div>

          <div>
            <label>Availability: </label>
            {editMode ? <input name="availability" value={formData.availability} onChange={handleChange} /> : <span>{user.availability}</span>}
          </div>
        </>
      )}

      <div>
        <label>Location: </label>
        {editMode ? <input name="location" value={formData.location} onChange={handleChange} /> : <span>{user.location}</span>}
      </div>

      <div style={{ marginTop: "1rem" }}>
        {editMode ? (
          <>
            <button onClick={handleSave}>💾 Save</button>
            <button onClick={() => setEditMode(false)}>❌ Cancel</button>
          </>
        ) : (
          <button onClick={() => setEditMode(true)}>✏️ Edit Profile</button>
        )}
      </div>
    </div>
  );
}
