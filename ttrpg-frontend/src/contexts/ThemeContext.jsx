
import React, { createContext, useState, useContext, useEffect } from 'react';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';

// 1. Create the ThemeContext
export const ThemeContext = createContext();

// 2. Define the light and dark theme objects
const lightTheme = {
    background: '#f0f0f0',
    color: '#333',
};

const darkTheme = {
    background: '#1e1e1e',
    color: '#f5f5f5',
};

// 3. The ThemeProvider component manages the theme state and persistence
export const ThemeProvider = ({ children }) => {
    // 4. State to hold the current theme, default is lightTheme
    const [theme, setTheme] = useState(lightTheme);

    // 5. Fetch the stored theme from localStorage on initial load
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setTheme(darkTheme);
        } else {
            setTheme(lightTheme);
        }
    }, []);

    // 6. Toggle theme between light and dark
    const toggleTheme = () => {
        const newTheme = theme === lightTheme ? darkTheme : lightTheme;
        setTheme(newTheme);
        // 7. Store the selected theme in localStorage for persistence
        localStorage.setItem('theme', newTheme === lightTheme ? 'light' : 'dark');
    };

    // 8. Provide context value for other components to access
    const contextValue = {
        theme,           // Current theme object (light or dark)
        toggleTheme,     // Function to toggle between themes
    };

    // 9. Provide the context and the theme provider
    return (
        <ThemeContext.Provider value={contextValue}>
            <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

// 10. Custom hook to access theme-related context
export const useTheme = () => useContext(ThemeContext);

// 11. Export default ThemeContext for direct access (if needed)
export default ThemeContext;