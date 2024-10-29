import React from 'react';
import { Card, Typography, Box, Divider, Button, Link } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import institutionDemoData from '../DemoData/demoData';
import uon from '../../assets/uon.png';

const InstitutionProfileCard = () => {
    const data = institutionDemoData;

    return (
        <Card 
            sx={{ 
                padding: 3, 
                borderRadius: 2, 
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)', 
                height: '85vh',
                backgroundColor: '#f5f5f5',
                color: '#333',
                overflowY: 'auto'
            }}
        >
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#3f51b5', marginBottom: 2 }}>
                Institution Profile
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
                <img 
                    src={uon}
                    alt="Institution Logo"
                    style={{ borderRadius: '50%', width: 150, height: 150 }}
                />
            </Box>
            
            {/* Basic Info Section */}
            <Box sx={{ marginBottom: 3 }}>
                <Typography variant="subtitle1" color="textSecondary">Institution Name:</Typography>
                <Typography variant="body1" sx={{ color: '#000' }}>{data.name}</Typography>
            </Box>

            <Divider sx={{ marginY: 2 }} />

            {/* Institution Type */}
            <Box sx={{ marginBottom: 3 }}>
                <Typography variant="subtitle1" color="textSecondary">Institution Type:</Typography>
                <Typography variant="body1" sx={{ color: '#000' }}>{data.type}</Typography>
            </Box>

            <Divider sx={{ marginY: 2 }} />

            {/* Established Year */}
            <Box sx={{ marginBottom: 3 }}>
                <Typography variant="subtitle1" color="textSecondary">Established Year:</Typography>
                <Typography variant="body1" sx={{ color: '#000' }}>{data.establishedYear}</Typography>
            </Box>

            <Divider sx={{ marginY: 2 }} />

            {/* Contact Information Section */}
            <Box sx={{ marginBottom: 3 }}>
                <Typography variant="subtitle1" color="textSecondary">Contact Email:</Typography>
                <Typography variant="body1" sx={{ color: '#000' }}>{data.contactEmail}</Typography>

                <Typography variant="subtitle1" color="textSecondary" sx={{ marginTop: 1 }}>Phone Number:</Typography>
                <Typography variant="body1" sx={{ color: '#000' }}>{data.phoneNumber}</Typography>
            </Box>

            <Divider sx={{ marginY: 2 }} />

            {/* Address Section */}
            <Box sx={{ marginBottom: 3 }}>
                <Typography variant="subtitle1" color="textSecondary">Address:</Typography>
                <Typography variant="body1" sx={{ color: '#000' }}>
                    {data.address}
                </Typography>
            </Box>

            <Divider sx={{ marginY: 2 }} />

            {/* Website Section */}
            <Box sx={{ marginBottom: 3 }}>
                <Typography variant="subtitle1" color="textSecondary">Website:</Typography>
                <Link href={data.website} target="_blank" sx={{ color: '#3f51b5' }}>
                    {data.website}
                </Link>
            </Box>

            <Divider sx={{ marginY: 2 }} />

            {/* Affiliations Section */}
            <Box sx={{ marginBottom: 3 }}>
                <Typography variant="subtitle1" color="textSecondary">Affiliations:</Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>
                    {data.affiliations}
                </Typography>
            </Box>

            <Divider sx={{ marginY: 2 }} />

            {/* About Section */}
            <Box sx={{ marginBottom: 3 }}>
                <Typography variant="subtitle1" color="textSecondary">About:</Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>
                    {data.about}
                </Typography>
            </Box>

            <Divider sx={{ marginY: 2 }} />

            {/* Social Media Links */}
            <Box sx={{ display: 'flex', gap: 2, marginBottom: 3 }}>
                <Link href={data.socialMedia.facebook} target="_blank" color="inherit">
                    <FacebookIcon sx={{ color: '#4267B2' }} />
                </Link>
                <Link href={data.socialMedia.twitter} target="_blank" color="inherit">
                    <TwitterIcon sx={{ color: '#1DA1F2' }} />
                </Link>
                <Link href={data.socialMedia.linkedin} target="_blank" color="inherit">
                    <LinkedInIcon sx={{ color: '#2867B2' }} />
                </Link>
            </Box>

            {/* Edit Button */}
            <Button
                variant="contained"
                color="primary"
                startIcon={<EditIcon />}
                sx={{ 
                    marginTop: 'auto', 
                    width: '100%', 
                    fontWeight: 'bold',
                    backgroundColor: '#3f51b5',
                    color: '#fff', 
                    '&:hover': { backgroundColor: '#303f9f' }
                }}
            >
                Edit Profile
            </Button>
        </Card>
    );
}

export default InstitutionProfileCard;
