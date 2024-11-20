import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import CharacterSheet from './pages/CharacterSheet';
import CampaignMap from './pages/CampaignMap';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import { ThemeContext } from './contexts/ThemeContext';
import { useUserSession } from './contexts/UserSessionContext';
import { useQuery } from 'react-query';
import api from './services/api';
import './App.css';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, login, logout } = useUserSession();

  // Fetch campaign data (example API call)
  const { data: campaignData, isLoading, error } = useQuery(
    'fetchCampaign',
    () => api.get('/campaign').then((res) => res.data),
    {
      enabled: !!user, // Only fetch if the user is logged in
    }
  );

  // Loading and Error States
  if (isLoading) return <LoadingSpinner />;
  if (error) return <p className="error-message">Failed to load campaign data.</p>;

  return (
    <div className={`app-container ${theme}`}>
      <Header toggleTheme={toggleTheme} user={user} logout={logout} />
      <main>
        <Routes>
          <Route path="/" element={<Home campaignData={campaignData} />} />
          <Route path="/character-sheet" element={<CharacterSheet />} />
          <Route path="/campaign-map" element={<CampaignMap />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;