import React from 'react';
import { motion } from 'framer-motion';
import { Box, TextField, Typography, InputAdornment } from '@mui/material';
import Container from '../components/widget/Container';
import Colors from '../utils/Colors';
import nft from '../assets/nft.png';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SearchIcon from '@mui/icons-material/Search'; // Import the search icon

const ClaimNft = () => {
    const cards = [1, 2, 3, 4, 5, 6]; // Dummy array for card display
    const duplicatedCards = [...cards, ...cards]; // Duplicate cards for seamless scrolling

    return (
        <Container>
            <Box sx={{ paddingY: 2, width: '100%', overflowX: 'hidden' }}>
                {/* Cards Container */}
                <Box sx={{ 
                    display: 'flex', 
                    position: 'relative', 
                    height: '270px', 
                    marginBottom: 2,
                    overflow: 'hidden', // Ensure that overflowing content is hidden
                }}>
                    <Box 
                        sx={{ 
                            display: 'flex', 
                            width: `calc(450px * ${duplicatedCards.length})`, // Calculate width based on number of cards
                            animation: 'scroll 5s linear infinite',
                        }}
                    >
                        {duplicatedCards.map((card, index) => (
                            <motion.div 
                                key={index} 
                                style={{
                                    minWidth: '450px',
                                    height: '220px',
                                    backgroundColor: 'white',
                                    borderRadius: '50px',
                                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginRight: '10px',
                                    padding: 15,
                                    gap: 5,
                                }}
                                animate={{ x: [0, -100 * (duplicatedCards.length / cards.length) + '%'] }} // Continuous smooth scroll
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }} // Adjust duration for smoothness
                            >
                                <img src={nft} alt="NFT" style={{ width: '160px', height: '160px', borderRadius: 40 }} />
                                <Box sx={{width: 70, height: 70, backgroundColor: Colors.light, borderRadius: 5}}  display="flex" justifyContent="center" alignItems="center">
                                    <HandshakeIcon fontSize={'large'} />
                                </Box>
                                <img src={nft} alt="NFT" style={{ width: '160px', height: '160px', borderRadius: 40 }} />
                            </motion.div>
                        ))}
                    </Box>
                </Box>

                <Box 
                    sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        padding: 2,
                        height: '30vh'
                    }}
                >
                    <Box>
                        <Typography variant="h2" fontWeight={800} sx={{ color: Colors.dark, marginBottom: 2, paddingX: 1, textAlign: 'center' }}>
                            Claim Docs in NFT
                        </Typography>
                        <Box sx={{ padding: 2 }}>
                            <Typography variant="h5" sx={{ color: Colors.darker, textAlign: 'center', marginBottom: 2 }}>
                                This is the Claim NFT page. You can claim your NFTs here.
                            </Typography>
                        </Box>

                        {/* TextField with search icon */}
                        <TextField  
                            variant="outlined" 
                            placeholder="Search NFT by ID, username, or ENS"
                            sx={{ 
                                width: '100%',
                                borderRadius: 4,
                                borderColor: Colors.light,

                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 4,
                                    textAlign: 'center',
                                    borderColor: Colors.light,
                                },
                                '& .MuiInputBase-input': {
                                    textAlign: 'center',
                                    paddingY: 3,
                                    borderColor: Colors.light,

                                },
                                boxShadow: '0 10px 5px rgba(0,0,0,0.6)',
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Box sx={{backgroundColor: 'rgba(255, 255, 255, .6)', padding: 2, borderRadius: 2}}>
                                        <SearchIcon /> {/* Search icon inside TextField */}
                                        </Box>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default ClaimNft;
