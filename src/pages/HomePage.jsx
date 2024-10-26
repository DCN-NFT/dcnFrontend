import React from 'react';
import HomeTopBar from '../components/widget/HomeTopBar';
import WhyChooseUs from '../components/widget/WhyChooseUs';
import AcademicAchievement from '../components/widget/AcademicAchievement';
import OurCreators from '../components/widget/OurCreators';

import { Box, Typography, Grid, Button, Paper } from '@mui/material';
import bgImage from '../assets/bgImage.png'; // Import the background image
import Colors from '../utils/Colors';
import Image1 from '../assets/image1.png';
import { Link } from 'react-router-dom';
import Footer from '../components/widget/Footer'

const academicAchievements = [  
    {
        title: 'User-Friendly Interface',
        description: 'Navigate effortlessly through your credentials with a clean layout.',
        buttonLabel: 'Discover More Features'
    }, 
    {
        title: 'Real-Time Updates',
        description: 'Receive instant notifications about your credential status and activities.',
        buttonLabel: 'Stay Informed Easily'
    },
    {
        title: 'Share Instantly',
        description: 'Easily share your credentials with employers or peers with a click.',
        buttonLabel: 'Start Sharing Now'
    },
    {
        title: 'Secure Verification',
        description: 'Verify your credentials safely and conveniently anytime, anywhere.',
        buttonLabel: 'Verify Your Credentials'
    }
];

const AchievementsEfficiently = [
    {
        title: 'Comprehensive Dashboard',
        description: 'View all your credentials and their statuses at a glance.',
        buttonLabel: 'Explore the Dashboard'
    }, 
    {
        title: 'Analytics Insights',
        description: 'Track your progress and engagement with insightful metrics.',
        buttonLabel: 'View Your Analytics'
    },
    {
        title: 'Custom Alerts',
        description: 'Set personalized notifications to stay on top of important updates.',
        buttonLabel: 'Customize Alerts Today'
    },
    {
        title: 'Support Access',
        description: 'Quickly reach support for any queries or assistance needed.',
        buttonLabel: 'Get Support Now'
    }
]


const HomePage = () => {
    return (
        <Box className="home-page" 
            sx={{ 
                position: 'relative', height: '100vh',
                background: '#090c2c'
            }}>
            <Box 
                className="home-page__bg"
                sx={{
                    // backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100vh',
                    zIndex: -1, // Send the background to the back
                    paddingX: { xs: 0, sm: 10, md: 35, lg: 35 },
                    paddingY: { xs: 0, sm: 10, md: 5, lg: 5 },
                    borderRadius: '0 0 50px 50px',
                    overflow: 'hidden'
                }}
            >

                {/* ##########################  Top Bar  ########################## */}
                <HomeTopBar />


                {/* ##########################  Main Content  ########################## */}
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ height: '80vh' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h1" sx={{ color: 'white', fontWeight: 'bold', marginTop: 5 }}>Step Into Your Digital Future With DCN</Typography>
                            <Typography variant="h5" sx={{ color: 'white', marginTop: 2 }}>A decentralized network for managing credentials and certificates.</Typography>

                            <Button variant="contained" color="primary" size="large" sx={{ marginTop: 5, width: 300, paddingY: 2, borderRadius: 5 }}>Get Started</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            {/* ##########################  Main Content  ########################## */}
            <WhyChooseUs />

            {/* ##########################  Academic Achievements  ########################## */}
            <AcademicAchievement />

            {/* empowering students */}
            <Box 
                sx={{ 
                    backgroundColor: 'inherit',
                    padding: 5,
                    paddingX: { xs: 0, sm: 10, md: 35, lg: 35 },
                    paddingY: { xs: 0, sm: 10, md: 20, lg: 20 }
                }}>
                <Typography variant="h4" sx={{ color: Colors.light, textAlign: 'center', marginBottom: 20, fontWeight: 'bold' }}>Empowering Students with Credentials</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} justifyContent='center' display='flex' flexDirection='column'>
                        <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold' }}>Elevate Your Credential Experience with Our Student Dashboard</Typography>
                        <Typography variant="h5" sx={{ color: 'white', marginTop: 2 }}>Manage your NFT-based credentials effortlessly and stay ahead in your academic journey.</Typography>
                        <Button variant="contained" color="primary" size="large" sx={{ marginTop: 5, width: 300, paddingY: 2, borderRadius: 5 }}>Get Started</Button>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <img src={Image1} alt="Image1" width="100%" height={600} style={{borderRadius: '30px'}} /> 
                    </Grid>
                </Grid>
            </Box>

            {/* ##########################  Our Creators  ########################## */}
            <OurCreators />


            {/* ###################################################### */}
            <Box 
                sx={{ 
                    backgroundColor: 'inherit',
                    padding: 5,
                    paddingX: { xs: 0, sm: 10, md: 35, lg: 35 },
                    paddingY: { xs: 0, sm: 10, md: 20, lg: 20 }
                }}>
                <Typography variant="h6" sx={{ color: Colors.light, textAlign: 'center', fontWeight: 'bold' }}>Empower Your Credentials</Typography>
                <Typography variant="h4" sx={{ color: Colors.light, textAlign: 'center', marginBottom: 20, fontWeight: 'bold' }}>Unlock Your Academic Achievements</Typography>
                <Grid container spacing={4}>
                    {academicAchievements.map((achievement, index) => (
                        <Grid item xs={12} sm={12} md={6} justifyContent='center' display='flex' flexDirection='column' key={index}>
                            <Paper elevation={3} sx={{ padding: 2, borderRadius: 5, display: 'flex', flexDirection: 'row', gap: 5 , alignItems: 'center', backgroundColor: 'inherit', border: '1px solid #4a4ab1' }}>
                                <Box display='flex' justifyContent='center'>
                                    <Box sx={{ width: 100, height: 100, backgroundColor: '#4a4ab1', borderRadius: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}/>
                                </Box>
                                <Box>
                                    <Typography variant="h4" sx={{ color: Colors.light, fontWeight: 'bold' }}>{achievement.title}</Typography>
                                    <Typography variant="body1" sx={{ color: Colors.light, marginTop: 2 }}>{achievement.description}</Typography>
                                    <Button 
                                        component={Link}
                                        color="primary"  sx={{ marginTop: 2, paddingLeft: 0, paddingY: 2, borderRadius: 5, fontWeight: 'bold', fontFamily: 'sans-serif' }} > {achievement.buttonLabel} </Button>
                                </Box>
                            </Paper> 
                        </Grid>
                    ))}
                </Grid>

            </Box>

            {/* Footer */}
            <Footer />


            

        </Box>
    );
};

export default HomePage;
