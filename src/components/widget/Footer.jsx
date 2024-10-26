import React from 'react';
import { Box, Typography, Grid, Button, Paper } from '@mui/material';
// const dcnlogo = require('../../assets/dcnlogo.png');

const Footer = () => {
    return (
        <Box sx={{backgroundColor: '#090c2c', padding: 2, textAlign: 'center' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {/* <img src={dcnlogo} alt="DCN Logo" width={80} height={80} /> */}
                        <Typography variant="h5" sx={{ color: 'white' }}>DCN</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Typography variant="body1" sx={{ color: 'white' }}>© 2024 DCN. All rights reserved.</Typography>
        </Box>
    )
}

export default Footer