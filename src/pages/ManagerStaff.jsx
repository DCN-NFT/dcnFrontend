import { Box, Typography } from '@mui/material'
import React from 'react'
import Container from '../components/widget/Container'

const ManagerStaff = () => {
    return (
        <Container>
            <Box marginY={5} display='flex' flexDirection='column' alignItems='center' justifyContent='center' height='100%'>
                <Typography variant='h4' color={'primary'}>Screen under development </Typography>

                <img src="https://www.pngitem.com/pimgs/m/46-460575_product-under-development-hd-png-download.png" alt="" />
            </Box>
        </Container>
    )
}

export default ManagerStaff