import React from 'react';
import { Card, CardContent, Typography, Button, Grow, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useAppContext } from '../context/AppProvider';

const AccountSelectionPage = () => {
    const { role, setRole, handleRole } = useAppContext();  // Get user role from context
    const navigate = useNavigate();

    // Initialize particles
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    // Handle account selection
    const handleSelectAccount = (accountType) => {
        setRole(accountType.toLowerCase()); // Update user role in context
        handleRole(accountType.toLowerCase()); // Update user role in local storage
        navigate(`/account/${accountType.toLowerCase()}`); // Adjust route as needed
    };

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    


    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" position="relative">
            {/* Card with Account Selection */}
            <Grow in={true} timeout={1000}>
                <Card sx={{ width: '80%', maxWidth: 400, padding: 3, textAlign: 'center' }}>
                    <CardContent>
                        <Typography variant="h5" component="div" gutterBottom>
                            Choose Account Type
                        </Typography>

                        <Box mt={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={() => handleSelectAccount('Student')}
                                sx={{
                                    mb: 2,
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    borderRadius: 3,
                                    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
                                    paddingY: 1.5,
                                    backgroundColor: '#1976d2', // primary blue
                                    '&:hover': {
                                        backgroundColor: '#1565c0', // slightly darker
                                    },
                                }}
                            >
                                Student
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                fullWidth
                                onClick={() => handleSelectAccount('Institution')}
                                sx={{
                                    mb: 2,
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    borderRadius: 3,
                                    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
                                    paddingY: 1.5,
                                    backgroundColor: '#6d1b7b', // deep purple
                                    '&:hover': {
                                        backgroundColor: '#4a148c', // slightly darker
                                    },
                                }}
                            >
                                Institution
                            </Button>
                            <Button
                                variant="contained"
                                color="success"
                                fullWidth
                                onClick={() => handleSelectAccount('Organization')}
                                sx={{
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    borderRadius: 3,
                                    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
                                    paddingY: 1.5,
                                    backgroundColor: '#388e3c', // green
                                    '&:hover': {
                                        backgroundColor: '#2e7d32', // slightly darker
                                    },
                                }}
                            >
                                Organization
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grow>
        </Box>
    );
};

export default AccountSelectionPage;
