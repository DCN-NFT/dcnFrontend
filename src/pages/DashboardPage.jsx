import React, { Suspense, lazy } from 'react';
import Colors from '../utils/Colors';
import { Box, Grid, Typography, Button, IconButton, Paper } from '@mui/material';
import Container from '../components/widget/Container';
import nft from '../assets/nft.png';
import PlusOne from '@mui/icons-material/PlusOne';
import SendIcon from '@mui/icons-material/Send';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import graduationIcon from '../assets/graduateIcon.png';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useAppContext } from '../context/AppProvider';
import ConnectedWalletWidget from '../components/ui/ConnectedWalletWidget';

// Action buttons
const actionBtns = [
    { label: 'Receive', icon: ArrowDownwardIcon },
    { label: 'Import', icon: ShoppingCartIcon },
    { label: 'Swap', icon: SwapHorizIcon },
    { label: 'Buy', icon: MonetizationOnIcon }
];

// Lazy load Image component
const LazyLoadImage = lazy(() => import('../components/LazyLoadImage'));

const DashboardPage = () => {
    const { connectedWallet, nfts } = useAppContext();
    const qrValue = "https://example.com"; // Replace with the value you want to encode

    return (
        <Container>
            <Box sx={{ color: Colors.primary, paddingY: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Grid container spacing={5}>
                            <Grid item md={12}>
                                <Box sx={{
                                    backgroundColor: Colors.white,
                                    padding: 2,
                                    borderRadius: 5,
                                    height: 300,
                                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 5
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        minWidth: 250,
                                        height: '100%'
                                    }}>
                                        <img src={graduationIcon} alt="graduation" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 5 }} />
                                    </Box>

                                    <Box>
                                        <Typography variant="h2" sx={{ color: '#00739D', marginTop: 2, fontSize: 32, fontWeight: 'bold' }}>
                                            DECENTRALIZED CREDENTIAL NETWORK
                                        </Typography>

                                        <Box sx={{ display: 'flex', justifyContent: 'space-around', paddingY: 2, alignItems: 'center', height: '100%', spacing: 10 }}>
                                            {/* Add wallet and manage wallet buttons */}
                                            <Button variant="outlined" color="primary" sx={{ borderRadius: 4, padding: 2, width: 180, height: 70, alignItems: 'center', fontWeight: 800, gap: 1.1 }}>
                                                Add Wallet <PlusOne />
                                            </Button>
                                            <Button variant="contained" color="primary" sx={{ borderRadius: 4, padding: 2, width: 180, height: 70 }}>
                                                Manage Wallet
                                            </Button>
                                        </Box>

                                        {/* Wallet address */}
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.light, borderRadius: 2 }}>
                                            {connectedWallet ? <ConnectedWalletWidget address={connectedWallet} len={35} /> : 'Connect Wallet'}
                                            {connectedWallet &&
                                                <IconButton onClick={() => navigator.clipboard.writeText(connectedWallet)} size="small">
                                                    <ContentCopyIcon sx={{ color: Colors.primary, fontSize: 16 }} />
                                                </IconButton>
                                            }
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>

                            {/* Action buttons */}
                            <Grid item sm={12} md={7}>
                                <Box sx={{
                                    backgroundColor: Colors.white,
                                    padding: 2,
                                    borderRadius: 5,
                                    height: 200,
                                    boxShadow: '0 10px 5px rgba(0,0,255,0.4)',
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    alignItems: 'center'
                                }}>
                                    {/* Button */}
                                    {actionBtns.map((btn, index) => (
                                        <Box key={index}>
                                            <Button variant="contained" color="primary" sx={{ borderRadius: 100, padding: 2, width: 70, height: 70 }}>
                                                <btn.icon />
                                            </Button>
                                            <Typography variant="h6" sx={{ color: Colors.dark, textAlign: 'center', marginTop: 2 }}>{btn.label}</Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Grid>

                            {/* QR Code */}
                            <Grid item sm={12} md={5}>
                                <Box sx={{
                                    backgroundColor: Colors.white,
                                    padding: 2,
                                    borderRadius: 5,
                                    height: 200,
                                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    {/* <QRCodeComponent value={qrValue} /> */}
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Box sx={{ backgroundColor: Colors.white, borderRadius: 5, height: 540, boxShadow: '0 2px 5px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                            <video
                                src="https://videos.pexels.com/video-files/18069232/18069232-uhd_3840_2160_24fps.mp4"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 5 }}
                                muted
                                autoPlay
                                loop
                            />
                        </Box>
                    </Grid>
                </Grid>

                {/* My Collections */}
                <Box sx={{ marginTop: 5 }}>
                    <Typography variant="h5" sx={{ color: Colors.primary, paddingLeft: 2, marginY: 2 }}>My Collections</Typography>

                    <Grid container spacing={2}>
                        {connectedWallet && nfts.length > 0 ? (
                            nfts.map((nftItem, index) => (
                                <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
                                    <Box sx={{
                                        backgroundColor: Colors.white,
                                        padding: 2,
                                        borderRadius: 5,
                                        height: 400,
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                                    }}>
                                        <Suspense fallback={<div>Loading...</div>}>
                                            <LazyLoadImage
                                                src={nftItem.image_url}
                                                alt={nftItem.name}
                                                style={{ width: '100%', height: '90%', objectFit: 'cover', borderRadius: 5 }}
                                            />
                                        </Suspense>
                                        <Typography variant="h6" sx={{ color: Colors.dark, textAlign: 'center', marginTop: 1 }}>{nftItem.name}</Typography>
                                    </Box>
                                </Grid>
                            ))
                        ) : (
                            // Default NFTs if no NFTs found or wallet not connected
                            [1, 2, 3, 4, 5, 6].map((item, index) => (
                                <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
                                    <Box sx={{
                                        backgroundColor: Colors.white,
                                        borderRadius: 5,
                                        height: 400,
                                        overflow: 'hidden',
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                                        position: 'relative'
                                    }}>
                                        <img src={nft} alt="default nft" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 5 }} />
                                        <Paper style={{ position: 'absolute', bottom: 10, left: 0, right: 30, padding: 10, backgroundColor: 'rgba(255, 255, 255, .8)', color: Colors.light, borderRadius: 5 }}>
                                            <Typography variant="h6" sx={{ color: Colors.dark, textAlign: 'center', marginTop: 1, fontWeight: 800 }}>Default NFT</Typography>
                                        </Paper>
                                    </Box>
                                </Grid>
                            ))
                        )}
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default DashboardPage;
