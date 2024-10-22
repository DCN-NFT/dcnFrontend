import React from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import Colors from '../utils/Colors';
import Container from '../components/widget/Container';
import ProfileSettings from '../components/widget/ProfileSettings';
import AccountSupport from '../components/widget/AccountSupport';

const SettingsPages = () => {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    // Example content for each tab
    const renderTabContent = () => {
        switch (selectedTab) {
            case 0:
                return <ProfileSettings />;
            case 1:
                return <Typography>Featured Items Settings Content</Typography>;
            case 2:
                return <Typography>Notifications Settings Content</Typography>;
            case 3:
                return <Typography>Offers Settings Content</Typography>;
            case 4:
                return <AccountSupport />;
            case 5:
                return <Typography>Developer Settings Content</Typography>;
            default:
                return null;
        }
    };

    return (
        <Container>
            <Box 
                sx={{ 
                    display: 'flex', 
                    width: '100%', 
                    color: Colors.darker, 
                    paddingY: 5 
                }}
            >
                {/* Vertical Tabs Section */}
                <Tabs
                    orientation="vertical"
                    value={selectedTab}
                    onChange={handleTabChange}
                    textColor="inherit"
                    indicatorColor="primary"
                    sx={{ 
                        borderRight: 1, 
                        borderColor: 'divider', 
                        minWidth: 400  // Adjust the width of the Tabs container
                    }}
                >
                    <Tab 
                        label="Profile" 
                        sx={{ 
                            fontWeight: selectedTab === 0 ? 'bold' : 'normal', 
                            color: selectedTab === 0 ? Colors.primary : Colors.darker,
                        }} 
                    />
                    <Tab 
                        label="Featured items" 
                        sx={{ 
                            fontWeight: selectedTab === 1 ? 'bold' : 'normal', 
                            color: selectedTab === 1 ? Colors.primary : Colors.darker,
                        }} 
                    />
                    <Tab 
                        label="Notifications" 
                        sx={{ 
                            fontWeight: selectedTab === 2 ? 'bold' : 'normal', 
                            color: selectedTab === 2 ? Colors.primary : Colors.darker,
                        }} 
                    />
                    <Tab 
                        label="Offers" 
                        sx={{ 
                            fontWeight: selectedTab === 3 ? 'bold' : 'normal', 
                            color: selectedTab === 3 ? Colors.primary : Colors.darker,
                        }} 
                    />
                    <Tab 
                        label="Account support" 
                        sx={{ 
                            fontWeight: selectedTab === 4 ? 'bold' : 'normal', 
                            color: selectedTab === 4 ? Colors.primary : Colors.darker,
                        }} 
                    />
                    <Tab 
                        label="Developer" 
                        sx={{ 
                            fontWeight: selectedTab === 5 ? 'bold' : 'normal', 
                            color: selectedTab === 5 ? Colors.primary : Colors.darker,
                        }} 
                    />
                </Tabs>

                {/* Content Section */}
                <Box 
                    sx={{ 
                        flexGrow: 1, // Ensures the content takes the remaining space
                        paddingLeft: 3  // Adds space between the tabs and content
                    }}
                >
                    {renderTabContent()}
                </Box>
            </Box>
        </Container>
    );
};

export default SettingsPages;
