import React, { useState, useEffect } from 'react';
import { Card, Typography, Grid, Box, Avatar, CardContent } from '@mui/material';
import badger from '../../assets/badger.png';

// Mock data for NFT collections
const mockNFTCollections = [
    {
        id: 1,
        nftName: 'Campus Art Collection',
        assignedTo: 'John Doe',
        studentImage: 'https://c8.alamy.com/comp/2G367BF/nft-non-fungible-tokens-hologram-stamp-certifies-a-digital-asset-to-be-unique-vector-illustration-2G367BF.jpg',
        description: 'A unique digital artwork collection for campus.',
    },
    {
        id: 2,
        nftName: 'Virtual Graduation Certificate',
        assignedTo: 'Jane Smith',
        studentImage: 'https://c8.alamy.com/comp/2G367BF/nft-non-fungible-tokens-hologram-stamp-certifies-a-digital-asset-to-be-unique-vector-illustration-2G367BF.jpg',
        description: 'A blockchain-certified virtual graduation certificate.',
    },
    {
        id: 3,
        nftName: 'Innovation Award Badge',
        assignedTo: 'Alice Brown',
        studentImage: 'https://c8.alamy.com/comp/2G367BF/nft-non-fungible-tokens-hologram-stamp-certifies-a-digital-asset-to-be-unique-vector-illustration-2G367BF.jpg',
        description: 'A token of achievement for innovation in technology.',
    },
];

const NFTCollectionWidget = () => {
    const [nftCollections, setNFTCollections] = useState([]);

    // Fetch NFT collections data (mock or from API)
    useEffect(() => {
        // In a real scenario, you'd fetch the data from an API like:
        // fetch('/api/nft-collections')
        //     .then(response => response.json())
        //     .then(data => setNFTCollections(data))
        // For now, we use mock data
        setNFTCollections(mockNFTCollections);
    }, []);

    return (
        <Box
            sx={{
                padding: 4,
                backgroundColor: '#f5f5f5',
                borderRadius: '15px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                margin: 'auto',
                maxWidth: '100%',
            }}
        >
            <Typography variant="h4" gutterBottom sx={{ color: '#1a237e', fontWeight: 'bold' }}>
                NFT Collections Assigned to Students
            </Typography>

            <Grid container spacing={4}>
                {nftCollections.map((nft) => (
                    <Grid item xs={12} md={4} key={nft.id}>
                        <Card
                            sx={{
                                borderRadius: '35px',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                overflow: 'hidden',
                                position: "relative",
                                height: '400px',
                                backgroundImage: `url('https://img.freepik.com/premium-photo/purple-purple-colored-background-with-purple-white-lines_1031776-78353.jpg')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                '&:before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                    background: 'rgba(255, 255, 255, 0.1)',  // Semi-transparent overlay
                                    backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, .6) 100%)',
                                    zIndex: 1,
                                },
                            }}
                        >
                            <Box style={{
                                position: "absolute",
                                top: 0,
                                left: 20,
                                bottom: 0,
                                // backgroundColor: "#a49262",
                                width: 70,
                                height: "100%",
                                borderRadius: "10px 10px 10px 10px",
                                zIndex: 2, // Ensures the ribbon is above the overlay
                            }}>
                                <img 
                                    alt="Badger" 
                                    src={badger} 
                                    style={{ 
                                        height: "105%", 
                                        borderRadius: "10px 10px 10px 10px",
                                    }}
                                />
                            </Box>
                            <CardContent sx={{ position: 'relative', height: '100%', zIndex: 2 }}>

                                {/* NFT Collection Information */}
                                <Box style={{
                                    position: "absolute",
                                    top: 30,
                                    right: 0,
                                    maxWidth: '75%',
                                    minHeight: '90%',
                                    padding: '10px 20px',
                                    textAlign: 'left',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}>
                                    <Box>
                                        <Typography variant="body1" gutterBottom sx={{color: 'white',fontFamily: "Rubik Wet Paint", fontWeight: 400, fontStyle: 'normal' }}>
                                            {nft.nftName}
                                        </Typography>
                                        <Typography variant="h5" color="white" gutterBottom sx={{ fontWeight: '400', fontFamily: "Archivo Black", fontStyle: 'normal', marginTop: 3 }}>
                                            {nft.description}
                                        </Typography>

                                        {/* Date */}
                                        <Typography variant="body1" color="white" gutterBottom sx={{ fontWeight: '400', fontFamily: "Archivo Black", fontStyle: 'normal', marginY: 2 }}>
                                            31st, October 2024
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1" color="white" gutterBottom sx={{ fontWeight: '400', fontFamily: "Archivo Black", fontStyle: 'normal', marginY: 2 }}>
                                        Issued by Mount kenya University
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default NFTCollectionWidget;
