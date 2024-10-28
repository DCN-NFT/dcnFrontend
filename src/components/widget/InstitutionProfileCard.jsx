import React from 'react';
import { Card, Typography, Box, Divider, Button, Link } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const InstitutionProfileCard = () => {
    return (
        <Card 
            sx={{ 
                padding: 3, 
                borderRadius: 2, 
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)', 
                height: '85vh',
                backgroundColor: '#f5f5f5', // Light grey background for the card
                color: '#333' // Darker color for text
            }}
        >
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#3f51b5', marginBottom: 2 }}>
                Institution Profile
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
                <img 
                    src="https://via.placeholder.com/150"
                    alt="Institution Logo"
                    style={{ borderRadius: '50%', width: 150, height: 150 }}
                />
            </Box>
            
            {/* Basic Info Section */}
            <Box sx={{ marginBottom: 3 }}>
                <Typography variant="subtitle1" color="textSecondary">Institution Name:</Typography>
                <Typography variant="body1" sx={{ color: '#000' }}>Example University</Typography>
            </Box>

            {/* Divider */}
            <Divider sx={{ marginY: 2 }} />

            {/* Institution Type */}
            <Box sx={{ marginBottom: 3 }}>
                <Typography variant="subtitle1" color="textSecondary">Institution Type:</Typography>
                <Typography variant="body1" sx={{ color: '#000' }}>Public University</Typography>
            </Box>

            <Divider sx={{ marginY: 2 }} />

            {/* Established Year */}
            <Box sx={{ marginBottom: 3 }}>
                <Typography variant="subtitle1" color="textSecondary">Established Year:</Typography>
                <Typography variant="body1" sx={{ color: '#000' }}>2024</Typography>
            </Box>

            <Divider sx={{ marginY: 2 }} />

            {/* Contact Information Section */}
            <Box sx={{ marginBottom: 3 }}>
                <Typography variant="subtitle1" color="textSecondary">Contact Email:</Typography>
                <Typography variant="body1" sx={{ color: '#000' }}>contact@exampleuniversity.edu</Typography>

                <Typography variant="subtitle1" color="textSecondary" sx={{ marginTop: 1 }}>Phone Number:</Typography>
                <Typography variant="body1" sx={{ color: '#000' }}>+123 456 7890</Typography>
            </Box>

            <Divider sx={{ marginY: 2 }} />

            {/* Address Section */}
            <Box sx={{ marginBottom: 3 }}>
                <Typography variant="subtitle1" color="textSecondary">Address:</Typography>
                <Typography variant="body1" sx={{ color: '#000' }}>
                    123 University St.<br />
                    City, State, ZIP
                </Typography>
            </Box>

            <Divider sx={{ marginY: 2 }} />

            {/* Website Section */}
            <Box sx={{ marginBottom: 3 }}>
                <Typography variant="subtitle1" color="textSecondary">Website:</Typography>
                <Link href="https://www.exampleuniversity.edu" target="_blank" sx={{ color: '#3f51b5' }}>
                    www.exampleuniversity.edu
                </Link>
            </Box>

            <Divider sx={{ marginY: 2 }} />

            {/* Affiliations Section */}
            <Box sx={{ marginBottom: 3 }}>
                <Typography variant="subtitle1" color="textSecondary">Affiliations:</Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>
                    Member of the Association of American Universities (AAU), Accredited by the Higher Learning Commission
                </Typography>
            </Box>

            <Divider sx={{ marginY: 2 }} />

            {/* About Section */}
            <Box sx={{ marginBottom: 3 }}>
                <Typography variant="subtitle1" color="textSecondary">About:</Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>
                    Example University is a premier institution focused on excellence in education, research, and innovation.
                </Typography>
            </Box>

            <Divider sx={{ marginY: 2 }} />

            {/* Social Media Links */}
            <Box sx={{ display: 'flex', gap: 2, marginBottom: 3 }}>
                <Link href="https://www.facebook.com/ExampleUniversity" target="_blank" color="inherit">
                    <FacebookIcon sx={{ color: '#4267B2' }} />
                </Link>
                <Link href="https://www.twitter.com/ExampleUniv" target="_blank" color="inherit">
                    <TwitterIcon sx={{ color: '#1DA1F2' }} />
                </Link>
                <Link href="https://www.linkedin.com/school/example-university" target="_blank" color="inherit">
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
                    backgroundColor: '#3f51b5', // Blue color for the button
                    color: '#fff', 
                    '&:hover': { backgroundColor: '#303f9f' } // Darker shade on hover
                }}
            >
                Edit Profile
            </Button>
        </Card>
    );
}

export default InstitutionProfileCard;
