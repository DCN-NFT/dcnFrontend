import React from 'react';
import { Box, Typography, Grid, Button, Paper } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{backgroundColor: 'rgba(255, 255, 255, .1)', padding: 2, textAlign: 'center' }}>
            <Typography variant="body1" sx={{ color: 'white' }}>© 2021 DCN. All rights reserved.</Typography>
        </Box>
    )
}

export default Footer