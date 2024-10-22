import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import dcnlogo from '../../assets/dcnlogo.png';
// arrow icon facing top right
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HomeTopBar = () => {
    return (
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} className="home-top-bar">
            <Box display={'flex'} alignItems={'center'} className="home-top-bar__left__item">
                <Link to="/">
                    <img src={dcnlogo} alt="DCN Logo" width={80} />
                </Link>
                <Typography variant="h4"
                    sx={{ color: 'white', fontWeight: 'bold', marginLeft: 2 }}
                >DCN</Typography>
            </Box>

            <Box display={'flex'} alignItems={'center'} gap={5}>
                <Link to="/nft" style={{textDecoration: 'none'}}>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>NFT</Typography>
                </Link>
                
                {/* docs */}
                <Link to="/docs" style={{textDecoration: 'none'}}>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', marginLeft: 2 }}>Docs</Typography>
                </Link>
                
                <Link to="/wallet" style={{textDecoration: 'none'}}>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', marginLeft: 2 }}>My Wallet</Typography>
                </Link>

                {/* pricing with drop down */}
                <Link to="/pricing" style={{textDecoration: 'none'}}>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', marginLeft: 2 }}>Pricing</Typography>
                </Link>
                
            </Box>

            <Button variant="contained" color="primary" size="large" sx={{paddingY: 1.5}} gap={2} display={'flex'} to="/dashboard" component={Link}>
                DCN Dashboard
                <ArrowForwardIcon />
            </Button>
        </Box>
    )
}

export default HomeTopBar;