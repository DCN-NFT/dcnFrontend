// src/context/AppContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the context
const AppContext = createContext();

// Custom hook to use the AppContext
export const useAppContext = () => {
    return useContext(AppContext);
};

// Create the AppProvider component
export const AppProvider = ({ children }) => {
    const [connectedWallet, setConnectedWallet] = useState('');
    const [nfts, setNfts] = useState([]); // New state for NFTs
    const [isCollapsed, setIsCollapsed] = useState(false); // State to control sidebar collapse
    const [role, setRole ] = useState('student'); 
    
    React.useEffect(() => {
        if (localStorage.getItem('role')) {
            setRole(localStorage.getItem('role'));
        }
    }, [role]);


    // store the role in local storage
    const handleRole = (role) => {
        localStorage.setItem('role', role);
        setRole(role);  
    }
    
    const value = {
        connectedWallet,
        setConnectedWallet,
        nfts,
        setNfts, // Expose setNfts to update the NFTs state
        isCollapsed,
        setIsCollapsed, // Expose setIsCollapsed to update the sidebar collapse state
        role,
        setRole,
        handleRole
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};
