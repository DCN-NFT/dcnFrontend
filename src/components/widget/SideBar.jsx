import { Box, IconButton } from '@mui/material';
import React, { useState } from 'react';
import Colors from '../../utils/Colors';
import NavLinks from './NavLinks'; // Import NavLinks component
import MenuIcon from '@mui/icons-material/Menu'; // Import Menu Icon
import CloseIcon from '@mui/icons-material/Close'; // Import Close Icon
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Collapse icon
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Expand icon
import { useAppContext } from '../../context/AppProvider';

const SideBar = () => {
    const { isCollapsed, setIsCollapsed } = useAppContext(); // Access isCollapsed and setIsCollapsed from context
    const [isOpen, setIsOpen] = useState(true); // State to control sidebar visibility
   
    const toggleSidebar = () => {
        setIsOpen(!isOpen); // Toggle sidebar state for mobile
    };

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed); // Toggle sidebar collapse
    };

    return (
        <>
            {/* Mobile toggle button */}
            <IconButton 
                onClick={toggleSidebar} 
                sx={{ 
                    display: { xs: 'block', sm: 'none' }, // Show on mobile only
                    position: 'fixed',
                    top: 10,
                    left: 10,
                    zIndex: 1000, // Ensure it's above other elements
                }}
            >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>

            {/* Sidebar */}
            <Box 
                sx={{ 
                    width: isCollapsed ? '100px' : { xs: '80%', sm: '250px', md: '300px', lg: '350px' }, // Adjust width when collapsed
                    backgroundColor: Colors.white, 
                    height: '100vh',
                    position: 'fixed', 
                    top: 0, 
                    left: 0,
                    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
                    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)', // Move off screen when closed
                    transition: 'transform 0.3s ease, width 0.3s ease', // Smooth transition for width
                    zIndex: 999, // Ensure it's above other elements
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }} 
            >
                {/* Sidebar Content */}
                <NavLinks isCollapsed={isCollapsed} /> {/* Pass isCollapsed to NavLinks */}

                {/* Collapse/Expand Button */}
                <IconButton
                    onClick={toggleCollapse}
                    sx={{
                        position: 'absolute',
                        bottom: 20,
                        right: isCollapsed ? '0px' : '0%', // Position based on collapsed state
                        transition: 'left 0.3s ease',
                    }}
                >
                    {isCollapsed ? <ArrowForwardIcon /> : <ArrowBackIcon />}
                </IconButton>
            </Box>
        </>
    );
};

export default SideBar;
