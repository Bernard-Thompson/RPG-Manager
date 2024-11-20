import React, { createContext, useContext, useState } from 'react';

const UserSessionContext = createContext();

export const UserSessionProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [campaignSettings, setCampaignSettings] = useState({});

    const login = (userData) => setUser(userData);
    const logout = () => setUser(null);

    return (
        <UserSessionContext.Provider value={{ user, login, logout, campaignSettings, setCampaignSettings }}>
            {children}
        </UserSessionContext.Provider>
    );
};

export const useUserSession = () => useContext(UserSessionContext);