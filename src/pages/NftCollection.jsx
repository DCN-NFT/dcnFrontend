import React from 'react';
import Container from '../components/widget/Container';
import { Box } from '@mui/material';
import NFTCollectionWidget from '../components/widget/NFTCollectionWidget';

const NftCollection = () => {
    return (
        <Container>
            <Box sx={{ mt: 4 }}>
                <NFTCollectionWidget />
            </Box>
        </Container>
    )
}

export default NftCollection