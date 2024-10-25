import React, { useState } from 'react';
import { Box, Card, Typography, TextField, Button, Grid, Paper, Drawer, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CreateContractWidget = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <Card
                sx={{
                    p: 6,
                    maxWidth: 900,
                    margin: 'auto',
                    backgroundColor: '#ffffff',
                    borderRadius: '15px',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                    color: '#333',
                }}
            >
                <Typography variant="h4" gutterBottom sx={{ color: '#1a237e', fontWeight: 'bold' }}>
                    Let's create a smart contract for your drop.
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                    You’ll need to deploy an ERC-721 contract onto the blockchain before you can create a drop.{' '}
                    <Button
                        href="#"
                        onClick={toggleSidebar}
                        style={{ color: '#1976d2', textDecoration: 'none', fontWeight: '500' }}
                    >
                        What is a contract?
                    </Button>
                </Typography>

                <Grid container spacing={4}>
                    {/* Logo Image Upload */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ mt: 2, mb: 2 }}>
                            <Typography variant="body1" gutterBottom sx={{ fontWeight: '500' }}>
                                Logo image
                            </Typography>
                            <Button
                                variant="outlined"
                                component="label"
                                sx={{
                                    width: '100%',
                                    padding: '15px',
                                    textAlign: 'center',
                                    minHeight: '150px',
                                    border: '2px dashed #1976d2',
                                    color: '#1976d2',
                                    borderRadius: '8px',
                                    '&:hover': { backgroundColor: '#e3f2fd' },
                                }}
                            >
                                Drag and drop or click to upload
                                <input type="file" hidden />
                            </Button>
                            <Typography variant="caption" color="textSecondary">
                                Recommended size: 350 x 350. File types: JPG, PNG, SVG, or GIF
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Contract Name Field */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ mt: 2, mb: 2 }}>
                            <Typography variant="body1" gutterBottom sx={{ fontWeight: '500' }}>
                                Add the contract name
                            </Typography>
                            <TextField
                                fullWidth
                                label="Contract name"
                                variant="outlined"
                                InputLabelProps={{ style: { color: '#666' } }}
                                sx={{
                                    input: { color: '#333' },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#1976d2' },
                                        '&:hover fieldset': { borderColor: '#1565c0' },
                                    },
                                }}
                            />
                        </Box>

                        {/* Wallet Address Input */}
                        <Box sx={{ mt: 2, mb: 2 }}>
                            <Typography variant="body1" gutterBottom sx={{ fontWeight: '500' }}>
                                Wallet address to send contract
                            </Typography>
                            <TextField
                                fullWidth
                                label="Wallet Address"
                                variant="outlined"
                                InputLabelProps={{ style: { color: '#666' } }}
                                sx={{
                                    input: { color: '#333' },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#1976d2' },
                                        '&:hover fieldset': { borderColor: '#1565c0' },
                                    },
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* Token Symbol Field */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ mt: 2, mb: 2 }}>
                            <TextField
                                fullWidth
                                label="Token symbol"
                                variant="outlined"
                                defaultValue="MCN"
                                InputLabelProps={{ style: { color: '#666' } }}
                                sx={{
                                    input: { color: '#333' },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#1976d2' },
                                        '&:hover fieldset': { borderColor: '#1565c0' },
                                    },
                                }}
                            />
                        </Box>

                        {/* Additional Info Section */}
                        <Box sx={{ mt: 6 }}>
                            <Typography variant="h6" gutterBottom sx={{ color: '#1a237e', fontWeight: 'bold' }}>
                                After you deploy your contract you'll be able to:
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                • Manage collection settings <br />
                                • Set up your drop <br />
                                • Prepare designs <br />
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 2 }} color="textSecondary">
                                Your community:
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                • Can’t view until published <br />
                                • Can view that you've deployed a contract
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Blockchain Selection */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="body1" gutterBottom sx={{ fontWeight: '500' }}>
                                Blockchain
                            </Typography>
                            <Paper
                                variant="contained"
                                fullWidth
                                sx={{
                                    backgroundColor: '#1976d2',
                                    color: '#fff',
                                    padding: '15px',
                                    borderRadius: '10px',
                                    textAlign: 'center',
                                    '&:hover': { backgroundColor: '#1565c0' },
                                }}
                            >
                                Ethereum <br />
                                <Typography variant="caption" color="inherit">
                                    Estimated cost to deploy: $9.89
                                </Typography>
                            </Paper>
                            <Paper
                                variant="contained"
                                fullWidth
                                sx={{
                                    backgroundColor: '#1976d2',
                                    color: '#fff',
                                    padding: '15px',
                                    borderRadius: '10px',
                                    textAlign: 'center',
                                    marginTop: 2,
                                    '&:hover': { backgroundColor: '#1565c0' },
                                }}
                            >
                                Base <br />
                                <Typography variant="caption" color="inherit">
                                    Estimated cost: $0.01
                                </Typography>
                            </Paper>

                            <Typography variant="caption" color="textSecondary" sx={{ mt: 2 }}>
                                Select the blockchain you want to deploy your contract on.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Card>

            {/* Sidebar for Contract Information */}
            <Drawer anchor="right" open={isSidebarOpen} onClose={toggleSidebar}>
                <Box
                    sx={{
                        width: 300,
                        p: 3,
                        backgroundColor: '#f5f5f5',
                        height: '100%',
                        color: '#333',
                    }}
                >
                    <IconButton onClick={toggleSidebar} sx={{ position: 'absolute', right: 16, top: 16 }}>
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h5" sx={{ color: '#1a237e', fontWeight: 'bold', mb: 2 }}>
                        What is a contract?
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#333' }}>
                        A contract is a set of code deployed onto the blockchain that dictates how tokens can be
                        transferred, minted, or burned. Smart contracts are self-executing agreements coded on the
                        blockchain that allow for transparency, immutability, and security. By deploying an ERC-721
                        contract, you create a unique, non-fungible token (NFT) collection that can be minted and
                        traded.
                    </Typography>
                </Box>
            </Drawer>
        </>
    );
};

export default CreateContractWidget;
