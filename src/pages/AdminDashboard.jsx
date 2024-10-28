import React, { useState } from 'react';
import Container from '../components/widget/Container';
import { Grid, Typography, Box, Button, Card, CardContent, IconButton, Paper, Tooltip } from '@mui/material';
import Colors from '../utils/Colors';
import bg2 from '../assets/bg2.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import InstitutionProfileCard from '../components/widget/InstitutionProfileCard';
import CertificateCard from '../components/widget/CertificateCard';

// icon of mu/icons
import MoreVert from '@mui/icons-material/MoreVert';
// Dummy NFT data for demonstration purposes
const nftData = [
    { id: 1, title: 'Username 1', description: 'Description of Username 1' },
    { id: 2, title: 'Username 2', description: 'Description of Username 2' },
    { id: 3, title: 'Username 3', description: 'Description of Username 3' },
    { id: 4, title: 'Username 4', description: 'Description of Username 4' },
    { id: 5, title: 'Username 5', description: 'Description of Username 5' },
    { id: 6, title: 'Username 6', description: 'Description of NFT 6' },
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
                {/* Institution Profile Card */}
                <Grid container spacing={3}
                    sx={{
                        maxHeight: '90vh',
                        minHeight: 500,
                        overflowY: 'scroll',
                        scrollbarWidth: 'none',
                    }}>

                    <Grid item xs={12} md={3} 
                        sx={{
                            height: '90vh',
                            overflowY: 'hidden',
                        }}>
                        <InstitutionProfileCard />
                    </Grid>
                    <Grid item xs={12} md={9}
                        sx={{
                            minHeight: 'inherit',
                            overflowY: 'scroll',
                        }}
                    >

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
                            <Typography variant="h4" sx={{ color: Colors.lighter, fontWeight: 'bold' }}>Create your own NFT</Typography>
                            <Typography variant="h6" sx={{ color: Colors.lighter }}>Create NFT Certificates for candidates</Typography>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Button variant="contained" color="primary" sx={{ marginTop: 2, paddingY: 1.5, width: 200, fontWeight: 800 }}
                                    to = "/account/institution/collection"
                                    component={Link}
                                >Discover Now</Button>
                                <Button     
                                    variant="outlined" 
                                    color="default" 
                                    sx={{ marginTop: 2, paddingY: 1.5, width: 200, borderColor: 'white', color: 'white', fontWeight: 800 }} 
                                    to="create-nft"
                                    component={Link}
                                >Create NFT Certs</Button>
                            </Box>
                            
                        </Box>

                        {/* All NFTs section */}
                        <Box sx={{ marginTop: 2 }}>
                            {/* Previous and Next buttons */}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 1, alignItems: 'center' }}> 
                                <Typography variant="h6" sx={{ color: Colors.primary, fontWeight: 'bold' }}>ALL NFTS</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3, gap: 3 }}>
                                    <Button 
                                        variant="outlined" 
                                        color="primary" 
                                        sx={{ padding: 1, borderRadius: 2 }} 
                                        onClick={handlePrevious}
                                        disabled={currentIndex === 0} // Disable when at the first NFT
                                        startIcon={<ArrowBackIcon />}  // Add left arrow icon
                                    >
                                    </Button>
                                    <Button 
                                        variant="outlined" 
                                        color="primary" 
                                        sx={{ padding: 1, borderRadius: 2 }} 
                                        onClick={handleNext}
                                        disabled={currentIndex === nftData.length - 1} // Disable when at the last NFT
                                        endIcon={<ArrowForwardIcon />}  // Add right arrow icon
                                    >
                                    </Button>
                                </Box>
                            </Box>
                            {/* NFT cards in a vertically scrollable box */}
                            <Box sx={{ 
                                maxHeight: 500,
                                minHeight: 500, 
                                overflowX: 'scroll', 
                                marginTop: 1, 
                                paddingRight: 2, 
                                display: 'flex', 
                                gap: 2,
                                scrollbarWidth: 'none',

                            }}>
                                {nftData.map((nft, index) => (
                                    <CertificateCard key={index} nft={nft} />
                                ))}
                            </Box>

                            
                        </Box>

                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AdminDashboard;
