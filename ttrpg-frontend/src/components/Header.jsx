import { Link } from 'react-router-dom';

function Header({ toggleTheme, user, logout }) {
    return (
        <header className="header">
            <h1>D&D Campaign Manager</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/character-sheet">Character Sheet</Link>
                <Link to="/campaign-map">Campaign Map</Link>
            </nav>
            <div className="user-controls">
                <button onClick={toggleTheme}>Toggle Theme</button>
                {user ? (
                    <button onClick={logout}>Logout</button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </header>
    );
} export default Header;