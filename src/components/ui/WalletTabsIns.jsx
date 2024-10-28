import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import Colors from '../../utils/Colors';

const WalletTabsIns = () => {
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
                    label="Issued Certificates" 
                    sx={{ fontWeight: selectedTab === 0 ? 'bold' : 'normal' }} 
                />
                <Tab 
                    label="Pending Verification" 
                    sx={{ fontWeight: selectedTab === 1 ? 'bold' : 'normal' }} 
                />
                <Tab 
                    label="Verified Certificates" 
                    sx={{ fontWeight: selectedTab === 2 ? 'bold' : 'normal' }} 
                />
                <Tab 
                    label="Revoked Certificates" 
                    sx={{ fontWeight: selectedTab === 3 ? 'bold' : 'normal' }} 
                />
                <Tab 
                    label="Certificate Templates" 
                    sx={{ fontWeight: selectedTab === 4 ? 'bold' : 'normal' }} 
                />
                <Tab 
                    label="Activity Log" 
                    sx={{ fontWeight: selectedTab === 5 ? 'bold' : 'normal' }} 
                />
                <Tab 
                    label="Settings" 
                    sx={{ fontWeight: selectedTab === 6 ? 'bold' : 'normal' }} 
                />
            </Tabs>
        </Box>
    );
};

export default WalletTabsIns;
