import { Box } from '@mui/material';
import React from 'react';
import Container from '../components/widget/Container';
import CreateContractWidget from '../components/widget/CreateContractWidget';
const CreateNft = () => {
    return (
        <Container>
            <Box sx={{ mt: 4 }}>
                <CreateContractWidget />
            </Box>
        </Container>
    )
}

export default CreateNft