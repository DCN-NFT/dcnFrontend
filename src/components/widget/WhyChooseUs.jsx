import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const WhyChooseUs = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'inherit',
                minHeight: '400px',
            }}
        >
            <Grid container 
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    minHeight: 'inherit',
                    paddingX:'10%',
                    paddingY: '5%',
                }}
            >
                <Grid item xs={6}> IMAGE </Grid>
                <Grid item xs={6}>
                    <Typography variant="h2" sx={{ fontWeight: 'bold', color: 'white', mb: 2 }}>
                        Why Choose Us
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                        {/* DCN is a centralized NFT network enabling the minting of certificates through NFTs on the blockchain. */}
                        DCN is a platform that enables the minting of certificates through NFTs on the blockchain, providing an immutable and verifiable record of achievements and credentials.
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                        By leveraging blockchain technology, we ensure that each certificate is unique, secure, and easily accessible. This process not only adds value to traditional certification methods but also opens up a world of possibilities for digital ownership.
                    </Typography>
                 
                    <Typography variant="h6" sx={{ color: 'white' }}>
                        Choose DCN for a modern, decentralized solution to certification that blends trust, transparency, and innovation.
                    </Typography>

                    {/* connect wallet btn */}
                    <Button variant="contained" sx={{ mt: 2, color: 'white', borderRadius: 10, paddingX: 10, paddingY: 2, fontWeight: 800, fontSize: 20 }} backgroundColor={'primary'}>
                        Connect Wallet
                    </Button>
                </Grid>

            </Grid>
        </Box>
    )
}

export default WhyChooseUs