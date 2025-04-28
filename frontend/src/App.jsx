import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import EventForm from './forms/EventForm';
import EventList from './forms/EventList';
import VolunteerDashboard from './dashboards/VolunteerDashboard';
import Sidebar from './dashboards/Sidebar';
import EventCard from './dashboards/EventCard';
import MyEventsPage from './pages/MyEventPage';
import EventCards from './pages/EventCards';
import FeedbackPage from './pages/FeedbackPage';
import ActivityLog from './pages/ActivityLog';
import BadgeCard from './pageandcards/BadgeCard';
import LeaderboardPage from './pageandcards/LeaderboardPage';
import AchievementsPage from './pageandcards/AchievementsPage';
// import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/eventform" element={<EventForm />} />
        <Route path="/eventlist" element={<EventList />} />
        <Route path="/volunteerdashboard" element={<VolunteerDashboard />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/eventcard" element={<EventCard />} />
        <Route path="/myeventpage" element={<MyEventsPage />} />
        <Route path="/eventcards" element={<EventCards />} />
        <Route path="/feedbackpage" element={<FeedbackPage />} />
        <Route path="/activitylog" element={<ActivityLog />} />
        <Route path="/badgecard" element={<BadgeCard />} />
        <Route path="/leaderboardpage" element={<LeaderboardPage />} />
        <Route path="/achievementspage" element={<AchievementsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
