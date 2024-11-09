import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DentistDashboard from './pages/DentistDashboard';
import PatientDashboard from './pages/PatientDashboard';
import SecretaryDashboard from './pages/SecretaryDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dentist/*" element={<DentistDashboard />} />
        <Route path="/patient/*" element={<PatientDashboard />} />
        <Route path="/secretary/*" element={<SecretaryDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;