import React, { useState } from 'react';
import Container from '../components/widget/Container';
import { Grid, Typography, Box, Button, Card, CardContent } from '@mui/material';
import Colors from '../utils/Colors';
import bg2 from '../assets/bg2.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Dummy NFT data for demonstration purposes
const nftData = [
    { id: 1, title: 'NFT 1', description: 'Description of NFT 1' },
    { id: 2, title: 'NFT 2', description: 'Description of NFT 2' },
    { id: 3, title: 'NFT 3', description: 'Description of NFT 3' },
    { id: 4, title: 'NFT 4', description: 'Description of NFT 4' },
    { id: 5, title: 'NFT 5', description: 'Description of NFT 5' },
    { id: 6, title: 'NFT 6', description: 'Description of NFT 6' },
    // Add more NFTs if needed
];

const AdminDashboard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handle Previous button click
    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    // Handle Next button click
    const handleNext = () => {
        if (currentIndex < nftData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <Container>
            <Box sx={{ marginTop: 5 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>

                        {/* Create your own NFT card */}
                        <Box    
                            sx={{ 
                                backgroundColor: 'white', 
                                padding: '1rem', 
                                borderRadius: 2, 
                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                                backgroundImage: `url(${bg2})`, 
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: 300,
                                flexDirection: 'column',
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                            <Typography variant="h2" sx={{ color: Colors.lighter, fontWeight: 'bold' }}>Create your own NFT</Typography>
                            <Typography variant="h5" sx={{ color: Colors.lighter }}>Create your own NFTs and manage them with ease.</Typography>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Button variant="contained" color="primary" sx={{ marginTop: 2, paddingY: 1.5, width: 200, fontWeight: 800 }}>Discover Now</Button>
                                <Button variant="outlined" color="default" sx={{ marginTop: 2, paddingY: 1.5, width: 200, borderColor: 'white', color: 'white', fontWeight: 800 }}>Create Yours</Button>
                            </Box>
                        </Box>

                        {/* All NFTs section */}
                        <Box sx={{ marginTop: 5 }}>
                            <Typography variant="h4" sx={{ color: Colors.primary, fontWeight: 'bold' }}>ALL NFTS</Typography>

                            {/* NFT cards in a vertically scrollable box */}
                            <Box sx={{ 
                                maxHeight: 400, 
                                overflowY: 'auto', 
                                marginTop: 2, 
                                paddingRight: 2, 
                                display: 'flex', 
                                flexDirection: 'column', 
                                gap: 2 
                            }}>
                                {nftData.map((nft, index) => (
                                    <Card key={nft.id} sx={{ 
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        borderRadius: 2, 
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)' 
                                    }}>
                                        <CardContent>
                                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{nft.title}</Typography>
                                            <Typography variant="body2" sx={{ color: Colors.dark }}>{nft.description}</Typography>
                                        </CardContent>
                                    </Card>
                                ))}
                            </Box>

                            {/* Previous and Next buttons */}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
                                <Button 
                                    variant="outlined" 
                                    color="primary" 
                                    sx={{ padding: 1, borderRadius: 2 }} 
                                    onClick={handlePrevious}
                                    disabled={currentIndex === 0} // Disable when at the first NFT
                                    startIcon={<ArrowBackIcon />}  // Add left arrow icon
                                >
                                    Previous
                                </Button>
                                <Button 
                                    variant="outlined" 
                                    color="primary" 
                                    sx={{ padding: 1, borderRadius: 2 }} 
                                    onClick={handleNext}
                                    disabled={currentIndex === nftData.length - 1} // Disable when at the last NFT
                                    endIcon={<ArrowForwardIcon />}  // Add right arrow icon
                                >
                                    Next
                                </Button>
                            </Box>
                        </Box>

                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AdminDashboard;
