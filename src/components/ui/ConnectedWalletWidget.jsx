import React from 'react';
import { Box } from '@mui/material';
import Colors from '../../utils/Colors';


const ConnectedWalletWidget = ({address, len}) => {
    const formatWalletAddress = (address) => {
        if (!address) return '';
        return `${address.slice(0, len)}...${address.slice(-4)}`; // Show first 6 and last 4 characters
    }
    return (
        <div>
            <Box sx={{ color: Colors.primary }}>
                Connected Wallet:
            </Box>
            <Box sx={{ color: Colors.secondary, fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                {formatWalletAddress(address)}
            </Box>
        </div>
    )
}

export default ConnectedWalletWidget;