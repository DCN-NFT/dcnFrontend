import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, Drawer } from '@mui/material';
import { Link } from 'react-router-dom';
import dcnlogo from '../../assets/dcnlogo.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu'; // Icon for the sidebar toggle

const HomeTopBar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to control sidebar open/close

    const toggleDrawer = (open) => () => {
        setIsOpen(open);
    };

    const menuItems = (
        <Box
            sx={{ width: 250, padding: 2 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold' }}>Menu</Typography>
            <Link to="/nft" style={{ textDecoration: 'none' }}>
                <Typography variant="body1" sx={{ color: 'black', marginY: 1 }}>NFT</Typography>
            </Link>
            <Link to="/docs" style={{ textDecoration: 'none' }}>
                <Typography variant="body1" sx={{ color: 'black', marginY: 1 }}>Docs</Typography>
            </Link>
            <Link to="/wallet" style={{ textDecoration: 'none' }}>
                <Typography variant="body1" sx={{ color: 'black', marginY: 1 }}>My Wallet</Typography>
            </Link>
            <Link to="/pricing" style={{ textDecoration: 'none' }}>
                <Typography variant="body1" sx={{ color: 'black', marginY: 1 }}>Pricing</Typography>
            </Link>

            {/* Add the DCN Dashboard Button in the sidebar */}
            <Button 
                variant="outlined" 
                color="primary" 
                size="large" 
                gap={2} 
                to="/account-selection" 
                component={Link}
                sx={{ borderRadius: 5, paddingY: 1.5, marginTop: 2 }} // Margin for spacing
            >
                DCN Dashboard
                <ArrowForwardIcon />
            </Button>
        </Box>
    );

    return (
        <Box 
            display={'flex'} 
            justifyContent={'space-between'} 
            alignItems={'center'} 
            className="home-top-bar" 
            sx={{ padding: 2 }}
        >
            <Box display={'flex'} alignItems={'center'} className="home-top-bar__left__item">
                <Link to="/">
                    <img src={dcnlogo} alt="DCN Logo" width={80} />
                </Link>
                <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold', marginLeft: 2 }}>
                    DCN
                </Typography>
            </Box>

            {/* For small screens: Sidebar toggle button */}
            <IconButton 
                sx={{ display: { xs: 'block', md: 'none' }, color: 'white' }} 
                onClick={toggleDrawer(true)}
            >
                <MenuIcon />
            </IconButton>

            {/* Main Navigation Links for larger screens */}
            <Box display={{ xs: 'none', md: 'flex' }} alignItems={'center'} gap={5}>
                <Link to="/nft" style={{ textDecoration: 'none' }}>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>NFT</Typography>
                </Link>
                <Link to="/docs" style={{ textDecoration: 'none' }}>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>Docs</Typography>
                </Link>
                <Link to="/wallet" style={{ textDecoration: 'none' }}>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>My Wallet</Typography>
                </Link>
                <Link to="/pricing" style={{ textDecoration: 'none' }}>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>Pricing</Typography>
                </Link>
            </Box>

            {/* Add the DCN Dashboard Button in the sidebar */}
            <Button 
                variant="outlined" 
                color="primary" 
                size="large" 
                gap={3} 
                to="/account-selection" 
                component={Link}
                sx={{ borderRadius: 5, paddingY: 1.5, marginTop: 2, display: { xs: 'none', md: 'flex' } }} // Margin for spacing
            >
                DCN Dashboard
                <ArrowForwardIcon sx={{mx: 2}}/>
            </Button>

            {/* Drawer for small screens */}
            <Drawer anchor='left' open={isOpen} onClose={toggleDrawer(false)}>
                {menuItems}
            </Drawer>
        </Box>
    );
};

export default HomeTopBar;
