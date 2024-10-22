import React, { useState } from 'react';
import { Box, Button, Paper, Typography, IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Colors from '../utils/Colors';
import { useAppContext } from '../context/AppProvider';
import Container from '../components/widget/Container';
import AccountBg from '../assets/accountBg.png';
import EthereumIcon from '../components/ui/EthereumIcon';
import WalletTabs from '../components/ui/WalletTabs';
import SearchComponent from '../components/ui/SearchComponent';
import Tooltip from '@mui/material/Tooltip';

const WalletAccountPage = () => {
    const { connectedWallet, setConnectedWallet } = useAppContext();

    // Example static date joined value
    const [dateJoined, setDateJoined] = useState('2024-09-20'); // Format: yyyy-mm-dd

    // Format wallet address to show first 6 and last 4 characters
    const formatWalletAddress = (address) => {
        if (!address) return '';
        return `${address.slice(0, 6)}...${address.slice(-4)}`; // Show first 6 and last 4 characters
    };

    // Dummy wallet connection handler for now
    const handleConnectWallet = () => {
        // Add wallet connection logic here (e.g., via web3 or a wallet provider)
        setConnectedWallet('0x1234567890ABCDEF1234567890ABCDEF12345678'); // Simulated wallet address
        setDateJoined(new Date().toISOString().split('T')[0]); // Set current date when connecting
    };

    return (
        <Container>
            {/* Cover background */}
            <Box
                sx={{
                    width: '100%',
                    height: 300,
                    backgroundColor: Colors.lighter,
                    border: '1px solid gray',
                    marginY: 2,
                    borderRadius: 4,
                    backgroundImage: `url(${AccountBg})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    zIndex: 1,
                    position: 'relative'
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        zIndex: 2
                    }}
                />

                {/* Account icon circle */}
                <Paper
                    elevation={3}
                    sx={{
                        width: 200,
                        height: 200,
                        borderRadius: '50%',
                        backgroundColor: Colors.muteblue,
                        position: 'absolute',
                        bottom: '-10%',
                        left: '10%',
                        transform: 'translateX(-50%)',
                        zIndex: 3,
                    }}
                />
            </Box>

            {/* Wallet info section */}
            <Box sx={{ paddingTop: 5, paddingX: 6 }} display="flex" justifyContent="space-between">
                <Box>
                    <Typography variant="h4" fontWeight={'bold'}>Unnamed</Typography>
                    {connectedWallet ? (
                        <>
                            <Box display={'flex'} gap={2} alignItems={'center'}>
                                <EthereumIcon sx={{ fontSize: 22, color: '#627eea' }} />
                                <Typography variant="body1" sx={{ color: Colors.grey, marginTop: 1 }}>
                                    {formatWalletAddress(connectedWallet)}
                                </Typography>
                                {/* Date joined display */}
                                <Typography variant="body1" sx={{ color: Colors.grey, marginTop: 1 }}>
                                    Date Joined: {dateJoined}
                                </Typography>
                            </Box>
                        </>
                    ) : (
                        <Button
                            variant="outlined"
                            color="primary"
                            sx={{ marginTop: 1 }}
                            onClick={handleConnectWallet}
                        >
                            Connect Wallet
                        </Button>
                    )}
                </Box>

                {/* Share icon and 3 dots (more) icon */}
                
                <Box display="flex" gap={1}>
                    <Tooltip title="Share">
                        <IconButton color="primary">
                            <ShareIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="More Options">
                        <IconButton color="primary">
                            <MoreHorizIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>

            <Box sx={{ paddingTop: 5, paddingX: 6 }}>
                {/* tabs */}
                <WalletTabs />

                {/* Search component */}
                <SearchComponent />
            </Box>
        </Container>
    );
};

export default WalletAccountPage;
