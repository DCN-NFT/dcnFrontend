import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button, Grid } from '@mui/material';
import { CardActionArea } from '@mui/material';
import Colors from '../../utils/Colors';

// Sample data for featured certifications
const featuredCertifications = [
    {
        id: 1,
        title: 'Blockchain Fundamentals',
        image: 'https://example.com/cert1.jpg',
        description: 'Learn the basics of blockchain technology and its applications.',
    },
    {
        id: 2,
        title: 'Smart Contracts Development',
        image: 'https://example.com/cert2.jpg',
        description: 'Develop and deploy smart contracts on the Ethereum blockchain.',
    },
    {
        id: 3,
        title: 'Decentralized Finance (DeFi)',
        image: 'https://example.com/cert3.jpg',
        description: 'Explore the world of decentralized finance and its protocols.',
    },
    {
        id: 4,
        title: 'NFT Creation and Marketing',
        image: 'https://example.com/cert4.jpg',
        description: 'Learn how to create and market your own NFTs effectively.',
    },
];

const FeaturedCertifications = () => {
    return (
        <Box padding={3}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: Colors.darker, marginBottom: 2 }}>
                Featured Certifications
            </Typography>

            <Grid container spacing={3} justifyContent="center">
                {featuredCertifications.map((cert) => (
                    <Grid item key={cert.id} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Card sx={{ width: 300, borderRadius: 2, boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={cert.image}
                                sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2, border: '3px solid darkblue' }}
                            />
                            {/* loader animation */}
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Loading image...
                                </Typography>
                            </CardContent>
                            <CardContent>
                                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                                    {cert.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {cert.description}
                                </Typography>
                            </CardContent>
                            <Button 
                                size="small" 
                                color="primary" 
                                onClick={() => console.log(`View details for ${cert.title}`)}
                                sx={{ margin: 1 }}
                            >
                                View Details
                            </Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default FeaturedCertifications;
