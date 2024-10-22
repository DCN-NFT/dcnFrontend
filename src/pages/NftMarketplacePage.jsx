// NftMarketplacePage.jsx
import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import Colors from '../utils/Colors';
import LazyLoadImage from '../components/LazyLoadImage';
import nftPlaceholder from '../assets/nft.png'; // Placeholder image for NFTs
import Container from '../components/widget/Container';

const nftsList = [
    {
        id: 1,
        title: "CryptoArt #1",
        floor: "0.5 ETH",
        volume: "150 ETH",
        image_url: nftPlaceholder // Replace with actual image URL if available
    },
    {
        id: 2,
        title: "CryptoArt #2",
        floor: "0.3 ETH",
        volume: "200 ETH",
        image_url: nftPlaceholder // Replace with actual image URL if available
    },
    {
        id: 3,
        title: "CryptoArt #3",
        floor: "0.8 ETH",
        volume: "300 ETH",
        image_url: nftPlaceholder // Replace with actual image URL if available
    },
    {
        id: 4,
        title: "CryptoArt #4",
        floor: "0.2 ETH",
        volume: "50 ETH",
        image_url: nftPlaceholder // Replace with actual image URL if available
    },
    {
        id: 5,
        title: "CryptoArt #5",
        floor: "0.7 ETH",
        volume: "400 ETH",
        image_url: nftPlaceholder // Replace with actual image URL if available
    }
];

const NftMarketplacePage = () => {
    const [nfts, setNfts] = useState([]);

    useEffect(() => {
        // Instead of fetching from an API, use the static list
        setNfts(nftsList);
    }, []);

    return (
        <Container>
            <Box sx={{ padding: 2 }}>
                <Typography variant="h5" sx={{ color: Colors.primary, marginBottom: 2, paddingX: 1 }}>
                    NFT Marketplace
                </Typography>

                <Grid container spacing={2}>
                    {nfts.length > 0 ? (
                        nfts.map((nft) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={nft.id}>
                                <Box
                                    sx={{
                                        backgroundColor: Colors.white,
                                        borderRadius: 5,
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                        padding: 2,
                                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                        '&:hover': {
                                            transform: 'scale(1.05) rotateY(5deg)',
                                            boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                                        },
                                        perspective: '1000px', // Adding perspective for 3D effect
                                    }}
                                >
                                    <Box
                                        sx={{
                                            transformStyle: 'preserve-3d',
                                            position: 'relative',
                                            height: '100%',
                                        }}
                                    >
                                        <LazyLoadImage
                                            src={nft.image_url || nftPlaceholder}
                                            alt={nft.title}
                                            style={{
                                                width: '100%',
                                                height: '200px',
                                                objectFit: 'cover',
                                                borderRadius: 5,
                                                backfaceVisibility: 'hidden', // Hide back face
                                            }}
                                        />
                                        <Typography variant="h6" sx={{ color: Colors.dark, marginTop: 1 }}>
                                            {nft.title}
                                        </Typography>
                                        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginTop: 1 }}>
                                            <Box>
                                                <Typography variant="body1" sx={{ color: Colors.grey, marginBottom: 1 }}>
                                                    Floor Price
                                                </Typography>
                                                <Typography variant="body1" sx={{ color: Colors.darker, fontWeight: 'bold', marginBottom: 1 }}>
                                                    {nft.floor}
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body1" sx={{ color: Colors.grey, marginBottom: 1 }}>
                                                    Volume
                                                </Typography>
                                                <Typography variant="body1" sx={{ color: Colors.darker, fontWeight: 'bold', marginBottom: 1 }}>
                                                    {nft.volume}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))
                    ) : (
                        <Typography variant="h6" sx={{ color: Colors.dark }}>No NFTs available at the moment.</Typography>
                    )}
                </Grid>
            </Box>
        </Container>
    );
};

export default NftMarketplacePage;
