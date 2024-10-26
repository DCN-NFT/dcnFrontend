import { Card } from '@mui/material'
import React from 'react'

const InstitutionProfileCard = () => {
    return (
        <Card sx={{ padding: 2, borderRadius: 2, boxShadow: '0 2px 5px rgba(0,0,0,0.1)', height: '85vh' }}>
            <h2>Institution Profile</h2>
            <p>Here you can view and edit your institution's profile information.</p>
        </Card>
    )
}

export default InstitutionProfileCard