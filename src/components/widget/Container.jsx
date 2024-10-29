import { Box, Button, Switch, IconButton, Badge } from '@mui/material';
import React, { useState } from 'react';
import { useAppContext } from '../../context/AppProvider';
import SideBar from './SideBar';
import Colors from '../../utils/Colors';
import AddWallet from '../AddWallet';
import ConnectedWalletWidget from '../ui/ConnectedWalletWidget';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import NotificationDrawer from './NotificationDrawer';

const Container = ({ children }) => {
    const [openAddWallet, setOpenAddWallet] = useState(false);
    const [darkMode, setDarkMode] = useState(false); // State for dark/light mode
    const { connectedWallet, setConnectedWallet, isCollapsed } = useAppContext(); // Access context
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleAddWalletOpen = () => {
        setOpenAddWallet(true);
    };

    const handleAddWalletClose = () => {
        setOpenAddWallet(false);
    };

    const handleDisconnectWallet = () => {
        setConnectedWallet(null); // Reset the connected wallet
        console.log('Disconnected wallet');
    };

    const handleThemeToggle = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };


    return (
        <Box sx={{ backgroundColor: darkMode ? Colors.dark : Colors.softWhite, minHeight: '100vh', display: 'flex' }}>
            <SideBar />
            <Box 
                sx={{ 
                    flex: 1, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    marginLeft: isCollapsed ? '100px' : { xs: '80%', sm: '250px', md: '300px', lg: '350px' },
                    padding: '1rem',
                    width: '100%',
                    overflowX: 'hidden'
                }} 
            >
                {/* Top bar */}
                <Box sx={{ backgroundColor: darkMode ? Colors.darker : Colors.white, boxShadow: '0 2px 5px rgba(0,0,0,0.1)', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: 2 }} >
                    <Box sx={{ color: darkMode ? Colors.light : Colors.dark, fontWeight: 'bold' }}>
                        Dashboard
                    </Box>
                    <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        {/* Notification icon with badge */}
                        <IconButton
                            onClick={toggleDrawer}
                            sx={{ color: darkMode ? Colors.light : Colors.dark,}}>
                            <Badge badgeContent={3} color="secondary"> {/* Display badge count */}
                                <NotificationsIcon fontSize="large" sx={{color: darkMode ? Colors.light : Colors.dark,}}/>
                            </Badge>
                        </IconButton>

                        {/* Dark/Light mode switch */}
                        <IconButton onClick={handleThemeToggle}>
                            {darkMode ? <Brightness7Icon sx={{color: darkMode ? Colors.light : Colors.dark,}}/> : <Brightness4Icon />}
                        </IconButton>

                        {connectedWallet ? ( // Show the formatted wallet address and disconnect button
                            <>
                                <ConnectedWalletWidget address={connectedWallet} len={6}/>
                                <Button
                                    variant="outlined"
                                    color= {darkMode ? Colors.light : 'primary'}
                                    onClick={handleDisconnectWallet}
                                    sx={{ borderRadius: 3, padding: 1 }}
                                >
                                    Switch Wallet
                                </Button>
                            </>
                        ) : (
                            <Button 
                                variant="outlined" 
                                color="primary"
                                sx={{ borderRadius: 3, padding: 1, width: 200 }}
                                onClick={handleAddWalletOpen}
                            >
                                Add Wallet
                            </Button>
                        )}
                    </Box>
                </Box>
                
                {children}
                
                <AddWallet open={openAddWallet} onClose={handleAddWalletClose} />
                <NotificationDrawer open={drawerOpen} onClose={toggleDrawer} />
            </Box>
        </Box>
    );
}

export default Container;
