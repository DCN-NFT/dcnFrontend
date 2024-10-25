import React, { useState, useEffect } from 'react';
import { Card, Typography, Grid, Box, Avatar, CardContent } from '@mui/material';

// Mock data for NFT collections
const mockNFTCollections = [
    {
        id: 1,
        nftName: 'Campus Art Collection',
        assignedTo: 'John Doe',
        studentImage: 'https://via.placeholder.com/150',
        description: 'A unique digital artwork collection for campus.',
    },
    {
        id: 2,
        nftName: 'Virtual Graduation Certificate',
        assignedTo: 'Jane Smith',
        studentImage: 'https://via.placeholder.com/150',
        description: 'A blockchain-certified virtual graduation certificate.',
    },
    {
        id: 3,
        nftName: 'Innovation Award Badge',
        assignedTo: 'Alice Brown',
        studentImage: 'https://via.placeholder.com/150',
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
                maxWidth: '1200px',
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
                                borderRadius: '15px',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                overflow: 'hidden',
                            }}
                        >
                            <CardContent>
                                {/* Student Avatar */}
                                <Box display="flex" alignItems="center" mb={2}>
                                    <Avatar
                                        src={nft.studentImage}
                                        alt={nft.assignedTo}
                                        sx={{ width: 60, height: 60, marginRight: 2 }}
                                    />
                                    <Typography variant="h6" sx={{ fontWeight: '500', color: '#1a237e' }}>
                                        {nft.assignedTo}
                                    </Typography>
                                </Box>

                                {/* NFT Collection Information */}
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    sx={{ fontWeight: 'bold', color: '#1976d2' }}
                                >
                                    {nft.nftName}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" gutterBottom>
                                    {nft.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default NFTCollectionWidget;
