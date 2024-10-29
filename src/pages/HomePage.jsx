import React, { useEffect, useState } from 'react';
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
import ThreeDModel from '../components/widget/ThreeDModel';
import ParticlesComponent from '../components/widget/ParticlesComponent';
import { Type } from 'lucide-react';

// import InifiniteLooper from '../components/widget/InifiniteLooper';

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
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        // Function to update time
        const updateTime = () => {
            const now = new Date();
            const formattedTime = now.toLocaleString('en-GB', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            });
            setCurrentTime(formattedTime);
        };

        // Update time every second
        const timerId = setInterval(updateTime, 1000);

        // Clear the interval on component unmount
        return () => clearInterval(timerId);
    }, []);

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
                    paddingX: { xs: 0, sm: 10, md: 15, lg: 25 },
                    paddingY: { xs: 0, sm: 10, md: 5, lg: 5 },
                    borderRadius: '0 0 50px 50px',
                    overflow: 'hidden',
                    zIndex: 10000
                }}
            >

                {/* ##########################  Top Bar  ########################## */}
                <Box height={180} >
                     <HomeTopBar />
                </Box>


                {/* ##########################  Main Content  ########################## */}
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ height: '80vh' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={8}>
                            <Typography 
                                variant="h1" 
                                sx={{ 
                                    color: 'white', 
                                    fontWeight: 'bold', 
                                    marginTop: 5, 
                                    fontSize: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' } // Responsive font sizes
                                }}
                            >
                                Step Into Your Digital Future With DCN
                            </Typography>
                                                
                            <Typography variant="h6" sx={{ color: 'white', marginTop: 2 }}>
                                A decentralized network for managing credentials and certificates.
                            </Typography>

                            <Typography variant="h6" sx={{ color: 'white', marginTop: 2 }}>
                                Say goodbye to traditional paperwork and embrace a transparent, secure way to verify and share your achievements globally. With DCN, each certification is uniquely tied to you, empowering you to prove your skills effortlessly.
                            </Typography>

                            {/* <Typography variant="body1" sx={{ color: 'white', marginTop: 2 }}>
                                Our network ensures the security and integrity of your credentials, utilizing blockchain technology to safeguard your data and provide a permanent record of your accomplishments.
                            </Typography> */}

                            <Typography variant="body1" sx={{ color: 'white', marginTop: 2 }}>
                                Whether you're a student, professional, or institution, DCN offers tools to issue, verify, and manage certificates with ease—no intermediaries, just your verified skills in your hands.
                            </Typography>

                            <Button 
                                variant="contained" 
                                color="primary" 
                                size="large" 
                                sx={{ marginTop: 5, width: 300, paddingY: 2, borderRadius: 5 }}
                            >
                                Get Started
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={12} md={4} display='flex' justifyContent='center'>
                        <Paper elevation={3} sx={{ padding: 2, borderRadius: 5, display: 'flex', flexDirection: 'column', gap: 5 , alignItems: 'center', backgroundColor: 'inherit', border: '1px solid #4a4ab1', width: 300, justifyContent: 'space-around', height: '90%', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)', transform: 'scale(1.1)' } }}>
                            <Box display='flex' justifyContent='center' flexDirection='column'>
                                <Typography variant="h4" sx={{ color: Colors.light, fontWeight: 'bold' }}>1000+</Typography>
                                <Typography variant="body1" sx={{ color: Colors.lighter }}>DCN mainet users</Typography>
                            </Box>

                            <hr style={{ width: '80%', color: 'white' }} />

                            <Box display='flex' justifyContent='center' flexDirection='column'>
                                <Typography variant="h4" sx={{ color: Colors.light, fontWeight: 'bold' }}>1000+</Typography>
                                <Typography variant="body1" sx={{ color: Colors.lighter }}>Created DCN Certs</Typography>
                            </Box>
                            <hr style={{ width: '80%', color: 'white' }} />

                            {/* New section for hours since last activity */}
                            <Box display='flex' justifyContent='center' flexDirection='column' alignItems={'center'}>   
                                <Typography variant="body1" sx={{ color: Colors.lighter }}>Time Since Activity</Typography>
                                <Typography variant="h4" sx={{ color: Colors.light, fontWeight: 'bold', textAlign: 'center' }}>{currentTime}</Typography>
                            </Box>
                        </Paper>

                        </Grid>
                    </Grid>
                </Box>

            </Box>

            {/* ##########################  Main Content  ########################## */}
            <WhyChooseUs />

            {/* ##########################  InfiniteLooper  ########################## */}
            {/* <InifiniteLooper s */}

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


            {/* ##########################  Academic Achievements  ########################## */}
            <AcademicAchievement />

            {/* ##########################  Our Creators  ########################## */}
            <OurCreators />


            {/* ###################################################### */}
            <Box 
                sx={{ 
                    backgroundColor: 'inherit',
                    padding: 5,
                    paddingX: { xs: 0, sm: 10, md: 35, lg: 35 },
                    paddingY: { xs: 0, sm: 10, md: 20, lg: 20 },
                    zIndex: 100000,
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

            <ParticlesComponent />

        </Box>
    );
};

export default HomePage;
