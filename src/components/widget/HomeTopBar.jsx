import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, Drawer, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import dcnlogo from '../../assets/dcnlogo.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu'; 
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppProvider';

const HomeTopBar = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const { role, setRole, handleRole } = useAppContext();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null); 

    const toggleDrawer = (open) => () => {
        setIsOpen(open);
    };

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget); 
    };

    const handleMenuClose = (item) => {
        handleRole(item);
        setAnchorEl(null);
    };

    const menuItems = (
        <Box
            sx={{
                width: 250,
                padding: 2,
                backgroundColor: '#f4f4f4',
                color: 'black',
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>Menu</Typography>
            <Link to="/nft" style={{ textDecoration: 'none' }}>
                <Typography variant="body1" sx={{ marginY: 1, color: '#333', fontWeight: 'medium' }}>NFT</Typography>
            </Link>
            <Link to="/docs" style={{ textDecoration: 'none' }}>
                <Typography variant="body1" sx={{ marginY: 1, color: '#333', fontWeight: 'medium' }}>Docs</Typography>
            </Link>
            <Link to="/wallet" style={{ textDecoration: 'none' }}>
                <Typography variant="body1" sx={{ marginY: 1, color: '#333', fontWeight: 'medium' }}>My Wallet</Typography>
            </Link>
            <Link to="/pricing" style={{ textDecoration: 'none' }}>
                <Typography variant="body1" sx={{ marginY: 1, color: '#333', fontWeight: 'medium' }}>Pricing</Typography>
            </Link>
            <Button 
                variant="outlined" 
                color="primary" 
                size="large" 
                to="/account-selection" 
                component={Link}
                sx={{
                    borderRadius: 5,
                    paddingY: 1.5,
                    marginTop: 2,
                    width: '100%',
                }}
            >
                DCN Dashboard
                <ArrowForwardIcon sx={{ marginLeft: 1 }} />
            </Button>
        </Box>
    );

    return (
        <Box 
            display="flex" 
            justifyContent="space-between" 
            alignItems="center" 
            sx={{ }}
        >
            <Box display="flex" alignItems="center">
                <Link to="/">
                    <img src={dcnlogo} alt="DCN Logo" width={80} />
                </Link>
                <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold', marginLeft: 2 }}>
                    DCN
                </Typography>
            </Box>

            <IconButton 
                sx={{ display: { xs: 'block', md: 'none' }, color: 'white' }} 
                onClick={toggleDrawer(true)}
            >
                <MenuIcon />
            </IconButton>

            <Box display={{ xs: 'none', md: 'flex' }} alignItems="center" gap={5}>
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

            <Button 
                variant="outlined" 
                color="primary" 
                size="large" 
                onClick={handleMenuClick}
                sx={{ borderRadius: 5, paddingY: 1.5, display: { xs: 'none', md: 'flex' } }}
            >
                DCN Dashboard
                <ArrowForwardIcon sx={{ marginLeft: 1 }} />
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{
                    '& .MuiPaper-root': {
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        color: 'white',
                        padding: 2
                    },
                }}
            >
                <MenuItem 
                    onClick={() => handleMenuClose('student')}
                    component={Link} 
                    to="/account/student"
                    sx={{ '&:hover': { backgroundColor: '#444' }, padding: 2 }}
                >
                    Student Dashboard
                </MenuItem>
                <MenuItem 
                    onClick={() => handleMenuClose('institution')}
                    component={Link} 
                    to="/account/institution"
                    sx={{ '&:hover': { backgroundColor: '#444' },  padding: 2 }}
                >
                    Institution Dashboard
                </MenuItem>
            </Menu>

            <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
                {menuItems}
            </Drawer>
        </Box>
    );
};

export default HomeTopBar;
