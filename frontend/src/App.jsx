import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './modules/Auth/Login';
import Register from './modules/Auth/Register';
import Sidebar from './modules/Dashboard/Sidebar';
import VolunteerDashboard from './modules/Dashboard/VolunteerDashboard';
import EventCard from './modules/Events/EventCard';
import EventForm from './modules/Events/EventForm';
import EventList from './modules/Events/EventList';
import ShareEvent from './modules/Events/ShareEvent';
import AchievementsPage from './modules/Gamification/AchievementsPage';
import BadgeCard from './modules/Gamification/BadgeCard';
import LeaderboardPage from './modules/Gamification/LeaderboardPage';
import ActivityLog from './modules/Participation/ActivityLog';
import CertificatePage from './modules/Participation/CertificatePage';
import FeedbackPage from './modules/Participation/FeedbackPage';
import MyEventsPage from './modules/Participation/MyEventPage';
import HomePage from './modules/Profile/HomePage';
import Profile from './modules/Profile/Profile';

import CertificatePage from "./modules/Participation/CertificatePage";

import Navbar from './components/Navbar';




// import HomePage from './components/HomePage';
// import Register from './components/Register';
// import Login from './components/Login';
// import Profile from './components/Profile';
// import EventForm from './forms/EventForm';
// import EventList from './forms/EventList';
// import VolunteerDashboard from './dashboards/VolunteerDashboard';
// import Sidebar from './dashboards/Sidebar';
// import EventCard from './dashboards/EventCard';
// import MyEventsPage from './pages/MyEventPage';
// import EventCards from './pages/EventCards';
// import FeedbackPage from './pages/FeedbackPage';
// import ActivityLog from './pages/ActivityLog';
// import BadgeCard from './pageandcards/BadgeCard';
// import LeaderboardPage from './pageandcards/LeaderboardPage';
// import AchievementsPage from './pageandcards/AchievementsPage';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>

        <Route path="/certificate" element={<CertificatePage />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/volunteerdashboard" element={<VolunteerDashboard />} />
        <Route path="/sidebar" element={<Sidebar />} />

        
        <Route path="/eventform" element={<EventForm />} />
        <Route path="/eventlist" element={<EventList />} />
        <Route path="/eventcard" element={<EventCard />} />
        <Route path="/shareevent" element={<ShareEvent />} />

        <Route path="/badgecard" element={<BadgeCard />} />
        <Route path="/leaderboardpage" element={<LeaderboardPage />} />
        <Route path="/achievementspage" element={<AchievementsPage />} />


        <Route path="/myeventpage" element={<MyEventsPage />} />
        <Route path="/certificatepage" element={<CertificatePage />} />
        <Route path="/feedbackpage" element={<FeedbackPage />} />
        <Route path="/activitylog" element={<ActivityLog />} />

        <Route path="/homepage" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        

      </Routes>
    </Router>
  );
}

export default App;
