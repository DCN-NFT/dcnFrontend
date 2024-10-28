import React, { useState } from 'react';
import { Box, Button, Paper, Typography, IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Colors from '../utils/Colors';
import { useAppContext } from '../context/AppProvider';
import Container from '../components/widget/Container';
import AccountBg from '../assets/accountBg.png';
import EthereumIcon from '../components/ui/EthereumIcon';
import WalletTabsIns from '../components/ui/WalletTabsIns';
import SearchComponent from '../components/ui/SearchComponent';
import SearchComponentIns from '../components/ui/SearchComponentIns';
import Tooltip from '@mui/material/Tooltip';

const WalletAccountInsPage = () => {
    const { connectedWallet, setConnectedWallet } = useAppContext();

    const [dateJoined, setDateJoined] = useState('2024-09-20');
    const [institutionName, setInstitutionName] = useState('Sample Institution'); // Example institution name
    const [balance, setBalance] = useState('1000 ETH'); // Example balance

    const formatWalletAddress = (address) => {
        if (!address) return '';
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };

    const handleConnectWallet = () => {
        setConnectedWallet('0x1234567890ABCDEF1234567890ABCDEF12345678');
        setDateJoined(new Date().toISOString().split('T')[0]);
    };

    return (
        <Container>
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

            <Box sx={{ paddingTop: 5, paddingX: 6 }} display="flex" justifyContent="space-between">
                <Box>
                    <Typography variant="h4" fontWeight={'bold'}>{institutionName}</Typography>
                    {connectedWallet ? (
                        <>
                            <Box display={'flex'} gap={2} alignItems={'center'}>
                                <EthereumIcon sx={{ fontSize: 22, color: '#627eea' }} />
                                <Typography variant="body1" sx={{ color: Colors.grey, marginTop: 1 }}>
                                    {formatWalletAddress(connectedWallet)}
                                </Typography>
                                <Typography variant="body1" sx={{ color: Colors.grey, marginTop: 1 }}>
                                    Balance: {balance}
                                </Typography>
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
                <WalletTabsIns />
                <SearchComponentIns />
            </Box>
        </Container>
    );
};

export default WalletAccountInsPage;
