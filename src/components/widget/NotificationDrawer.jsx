import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Drawer, IconButton, Badge, Tabs, Tab } from '@mui/material';
import { Close } from '@mui/icons-material';
import Colors from '../../utils/Colors';

const NotificationDrawer = ({ open, onClose }) => {
    const [tabValue, setTabValue] = useState(0); // 0 for unread, 1 for read, 2 for all
    const [selectedNotification, setSelectedNotification] = useState(null); // State to store selected notification

    const [notifications, setNotifications] = useState([
        { id: 1, title: "New NFT Certificate", message: "Your new NFT certificate has been issued.", isRead: false },
        { id: 2, title: "Profile Updated", message: "Your profile for NFT certifications was updated.", isRead: true },
        { id: 3, title: "Verification Request", message: "Your NFT certificate verification request is pending.", isRead: false },
        { id: 4, title: "NFT Certificate Transferred", message: "Your NFT certificate has been successfully transferred.", isRead: false },
        { id: 5, title: "Expiration Reminder", message: "Your NFT certificate is set to expire soon. Renew to retain access.", isRead: true },
    ]);
    

    useEffect(() => {
        // Request permission for notifications
        if (Notification.permission !== "granted") {
            Notification.requestPermission();
        }
    }, []);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleNotificationClick = (notification) => {
        // Update the notification to mark it as read
        const updatedNotifications = notifications.map(n => 
            n.id === notification.id ? { ...n, isRead: true } : n
        );
        setNotifications(updatedNotifications); // Update the notifications state

        setSelectedNotification(notification); // Set the selected notification

        // Show browser notification
        showNotification(notification.title, notification.message);
    };

    const showNotification = (title, message) => {
        if (Notification.permission === "granted") {
            new Notification(title, { body: message });
        }
    };

    const handleCloseDetails = () => {
        setSelectedNotification(null); // Close the details view
    };

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box 
                role="presentation" 
                sx={{ width: 300, padding: 2, bgcolor: Colors.light, height: '100%' }}
            >
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" fontWeight={600}>
                        Notifications
                    </Typography>
                    <IconButton onClick={onClose}>
                        <Close />
                    </IconButton>
                </Box>
                <Tabs 
                    value={tabValue} 
                    onChange={handleTabChange} 
                    textColor="primary"
                    indicatorColor="primary"
                >
                    <Tab label={`Unread (${notifications.filter(n => !n.isRead).length})`} />
                    <Tab label={`Read (${notifications.filter(n => n.isRead).length})`} />
                    <Tab label={`All (${notifications.length})`} />
                </Tabs>
                <List>
                    {(tabValue === 0 
                        ? notifications.filter(n => !n.isRead) 
                        : tabValue === 1 
                        ? notifications.filter(n => n.isRead) 
                        : notifications
                    ).map(notification => (
                        <ListItem 
                            key={notification.id} 
                            button 
                            onClick={() => handleNotificationClick(notification)} // Click handler
                        >
                            <ListItemText 
                                primary={notification.title} 
                                secondary={notification.message} 
                                sx={{ 
                                    color: notification.isRead ? Colors.grey : Colors.darker,
                                    fontWeight: notification.isRead ? 'normal' : 'bold' 
                                }} 
                            />
                            {!notification.isRead && (
                                <Badge color="error" variant="dot" />
                            )}
                        </ListItem>
                    ))}
                </List>
            </Box>
            {selectedNotification && (
                <NotificationDetail 
                    notification={selectedNotification} 
                    onClose={handleCloseDetails} 
                />
            )}
        </Drawer>
    );
};

const NotificationDetail = ({ notification, onClose }) => {
    return (
        <Drawer 
            anchor="right" 
            open={true} 
            onClose={onClose} 
            sx={{ minWidth: 400, width: 600 }} // Width for the detail drawer
        >
            <Box 
                role="presentation" 
                sx={{ padding: 2, bgcolor: Colors.light, height: '100%' }}
            >
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" fontWeight={600}>
                        {notification.title}
                    </Typography>
                    <IconButton onClick={onClose}>
                        <Close />
                    </IconButton>
                </Box>
                <Typography variant="body1" sx={{ marginTop: 2 }}>
                    {notification.message}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 1, color: Colors.grey }}>
                    {`Notification ID: ${notification.id}`}
                </Typography>
            </Box>
        </Drawer>
    );
};

export default NotificationDrawer;
