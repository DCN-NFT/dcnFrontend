import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import Colors from '../../utils/Colors';

const WalletTabs = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Box sx={{ width: '100%', color: Colors.darker }}>
            <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                textColor="inherit"
                indicatorColor="primary"
            >
                <Tab 
                    label="Collected" 
                    sx={{ fontWeight: selectedTab === 0 ? 'bold' : 'bold' }} 
                />
                <Tab 
                    label="Offers made" 
                    sx={{ fontWeight: selectedTab === 1 ? 'bold' : 'bold' }} 
                />
                <Tab 
                    label="Deals" 
                    sx={{ fontWeight: selectedTab === 2 ? 'bold' : 'bold' }} 
                />
                <Tab 
                    label="Created" 
                    sx={{ fontWeight: selectedTab === 3 ? 'bold' : 'bold' }} 
                />
                <Tab 
                    label="Favorited" 
                    sx={{ fontWeight: selectedTab === 4 ? 'bold' : 'bold' }} 
                />
                <Tab 
                    label="Activity" 
                    sx={{ fontWeight: selectedTab === 5 ? 'bold' : 'bold' }} 
                />
                <Tab 
                    label="More" 
                    sx={{ fontWeight: selectedTab === 6 ? 'bold' : 'bold' }} 
                />
            </Tabs>
        </Box>
    );
};

export default WalletTabs;
