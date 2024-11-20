import React, { useContext } from 'react'; // React and hooks for context
import { Link } from 'react-router-dom'; // For navigation within the app
import { ThemeContext } from '../contexts/ThemeContext'; // For theme management (light/dark)
import { useUserSession } from '../contexts/UserSessionContext'; // For user session management
import './Home.css'; // Importing styles for the Home component

// Home component receives campaignData as props to display campaign information
function Home({ campaignData }) {
    // Accessing theme context to apply styles dynamically
    const { theme } = useContext(ThemeContext);
    // Accessing user session context to personalize the welcome message
    const { user } = useUserSession();

    // Conditional rendering for campaign data if available
    const renderCampaignOverview = () => {
        if (campaignData) {
            return (
                <div className="campaign-details">
                    <p><strong>Campaign Name:</strong> {campaignData.name}</p>
                    <p><strong>Dungeon Master:</strong> {campaignData.dungeonMaster}</p>
                    <p><strong>Current Session:</strong> {campaignData.currentSession}</p>
                    <p><strong>Description:</strong> {campaignData.description}</p>
                </div>
            );
        } else {
            return <p className="no-data">No campaign data available. Start a new campaign or check your connection.</p>;
        }
    };

    // The home page's return JSX
    return (
        <div className={`home-container ${theme}`} aria-live="polite">
            <h2>Welcome to D&D Campaign Manager</h2>

            {/* Displaying the appropriate welcome message based on the user session */}
            {user ? (
                <div className="welcome-message">
                    <p>Hello, {user.username}! Ready for another adventure?</p>
                </div>
            ) : (
                <div className="guest-message">
                    <p>Welcome, Guest! Please log in to access your campaign data.</p>
                </div>
            )}

            {/* Campaign Overview Section */}
            <div className="campaign-overview">
                <h3>Campaign Overview</h3>
                {renderCampaignOverview()}
            </div>

            {/* Navigation Links to different sections */}
            <div className="navigation-links">
                <Link to="/character-sheet" className="link-button" aria-label="Go to Character Sheets">Character Sheets</Link>
                <Link to="/campaign-map" className="link-button" aria-label="Go to Campaign Map">Campaign Map</Link>
                <Link to="/session-logs" className="link-button" aria-label="Go to Session Logs">Session Logs</Link>
            </div>
        </div>
    );
}

export default Home;
