import React, { useState } from 'react';
import { Box, Typography, Switch, Button } from '@mui/material';
import Colors from '../../utils/Colors';

const NotificationSettings = () => {
    // State to hold notification preferences
    const [notifications, setNotifications] = useState({
        emailNotifications: true,
        smsNotifications: false,
        pushNotifications: false,
    });

    // Handler to toggle notifications
    const handleToggle = (event) => {
        const { name, checked } = event.target;
        setNotifications((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    // Handler for saving settings
    const handleSaveSettings = () => {
        // Save notification settings (e.g., send to backend or local storage)
        console.log('Notification settings saved:', notifications);
        // Optionally display a success message or update the UI
    };

    return (
        <Box padding={3}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: Colors.darker }}> Notification Settings </Typography>

            <Box sx={{ marginTop: 4 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" sx={{ color: Colors.darker }}> Email Notifications </Typography>
                    <Switch
                        name="emailNotifications"
                        checked={notifications.emailNotifications}
                        onChange={handleToggle}
                    />
                </Box>

                <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginTop: 2 }}>
                    <Typography variant="h6" sx={{ color: Colors.darker }}> SMS Notifications </Typography>
                    <Switch
                        name="smsNotifications"
                        checked={notifications.smsNotifications}
                        onChange={handleToggle}
                    />
                </Box>

                <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginTop: 2 }}>
                    <Typography variant="h6" sx={{ color: Colors.darker }}> Push Notifications </Typography>
                    <Switch
                        name="pushNotifications"
                        checked={notifications.pushNotifications}
                        onChange={handleToggle}
                    />
                </Box>
            </Box>

            <Box sx={{ marginTop: 4 }}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleSaveSettings}
                    sx={{ paddingX: 10, paddingY: 2 }}
                >
                    Save Settings
                </Button>
            </Box>
        </Box>
    );
};

export default NotificationSettings;
