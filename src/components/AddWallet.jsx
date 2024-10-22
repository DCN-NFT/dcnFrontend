// src/components/AddWallet.js
import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Box } from '@mui/material';
import { ethers } from 'ethers';
import metamaskLogo from '../assets/metamask.png';
import { useAppContext } from '../context/AppProvider';
import dcnlogo from '../assets/dcnlogo.png';
import CloseIcon from '@mui/icons-material/Close'; // Import Close icon

const AddWallet = ({ open, onClose }) => {
    const [walletAddress, setWalletAddress] = useState('');
    const { setConnectedWallet } = useAppContext(); // Access the setConnectedWallet function

    const handleConnectMetaMask = async () => {
        if (window.ethereum) {
            try {
                // Request account access
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const address = accounts[0];
                setWalletAddress(address);
                console.log('Connected MetaMask wallet address:', address);
                setConnectedWallet(address); // Update the connected wallet in context
                
                // Fetch NFTs after connecting the wallet
                await fetchNFTs(address);
                
                onClose(); // Close the dialog after adding the wallet
            } catch (error) {
                console.error('User denied account access or error occurred:', error);
            }
        } else {
            console.error('MetaMask is not installed!');
        }
    };

    const fetchNFTs = async (address) => {
        try {
            // Use an NFT API to fetch NFTs
            const response = await fetch(`https://api.opensea.io/api/v1/assets?owner=${address}&order_direction=desc&offset=0&limit=20`);
            const data = await response.json();

            if (data.assets) {
                console.log('NFTs:', data.assets); // Log the fetched NFTs
            } else {
                console.log('No NFTs found for this wallet.');
            }
        } catch (error) {
            console.error('Error fetching NFTs:', error);
        }
    };

    const handleConnectOtherWallet = () => {
        console.log('Connect to another wallet functionality not implemented yet.');
    };

    return (
        <Dialog 
            open={open} 
            onClose={onClose} 
            fullWidth 
            maxWidth="xs" 
            sx={{ borderRadius: '15px' }}
            PaperProps={{
                sx: {
                    borderRadius: '15px', // Add border radius to the Paper component
                },
            }}  
        >
            <Button onClick={onClose} color="inherit" sx={{ minWidth: 'auto', position: 'absolute', right: 0 }}>
                <CloseIcon />
            </Button>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={dcnlogo} alt="DCN Logo" style={{ width: '200px' }} />
            </DialogTitle>
            <DialogContent sx={{ textAlign: 'center' }}>
                <Button
                    onClick={handleConnectMetaMask}
                    color="primary"
                    fullWidth
                    variant="outlined"
                    sx={{ marginBottom: '1rem', paddingY: '.5rem' }}
                >
                    <img src={metamaskLogo} alt="MetaMask" style={{ width: '50px', height: '50px', marginRight: '1rem' }} />
                    Connect MetaMask
                </Button>

                <Button
                    onClick={handleConnectOtherWallet}
                    color="secondary"
                    fullWidth
                    variant="outlined"
                    sx={{ paddingY: '1rem' }}
                >
                    Connect Other Wallet
                </Button>

                {/* or */}
                <Box sx={{ marginY: '2rem' }} letterSpacing={2}>
                    <span>--------------------- </span>
                    <span style={{ color: '#777', fontSize: '0.8rem' }}> or </span>
                    <span>--------------------- </span>
                </Box>
                <Button
                    onClick={onClose}
                    color="primary"
                    fullWidth
                    variant="contained"
                    sx={{ paddingY: '1rem' }}
                >
                    Connect Smart Wallet
                </Button>

            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddWallet;
