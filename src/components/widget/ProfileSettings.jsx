import { Box, Typography, TextField, Button } from '@mui/material';
import Colors from '../../utils/Colors';
import React, { useState } from 'react';
import { useAppContext } from '../../context/AppProvider';

const ProfileSettings = () => {
    const { connectedWallet } = useAppContext();

    // States to store selected images
    const [profilePicture, setProfilePicture] = useState(null);
    const [bannerImage, setBannerImage] = useState(null);

    // Handlers for uploading and previewing images
    const handleProfilePictureChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfilePicture(URL.createObjectURL(file)); // Create preview URL
        }
    };

    const handleBannerImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setBannerImage(URL.createObjectURL(file)); // Create preview URL
        }
    };

    return (
        <Box padding={3}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: Colors.darker }}> Profile details </Typography>

            <Box display={{ xs: 'block', md: 'flex' }} sx={{ marginTop: 2 }}>
                <Box>

                    {/* Username */}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h6" sx={{ color: Colors.darker }}> Username </Typography>
                        <TextField
                            label="Enter Username"
                            variant="outlined"
                            sx={{ marginTop: 2, width: 400 }}
                        />
                    </Box>

                    {/* Bio */}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h6" sx={{ color: Colors.darker }}> Bio </Typography>
                        <TextField
                            label="Tell the world about yourself"
                            variant="outlined"
                            sx={{ marginTop: 2, width: 400 }}
                            multiline
                            rows={4}
                        />
                    </Box>

                    {/* Email */}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h6" sx={{ color: Colors.darker }}> Email </Typography>
                        <TextField
                            label="Enter Email"
                            variant="outlined"
                            sx={{ marginTop: 2, width: 400 }}
                        />
                    </Box>

                    {/* Wallet Address */}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h6" sx={{ color: Colors.darker }}> Wallet Address </Typography>
                        {connectedWallet ? (
                            <Typography variant="body1" sx={{ marginTop: 1 }}>
                                {connectedWallet}
                            </Typography>
                        ) : (
                            <Typography variant="body1" sx={{ marginTop: 1 }}>
                                Connect a wallet to view your wallet address
                            </Typography>
                        )}
                    </Box>

                    {/* Save Button */}
                    <Box sx={{ marginTop: 10 }}>
                        <Box>
                            <Typography variant="body1" sx={{ marginTop: 1 }}>
                                Click the button below to save changes
                            </Typography>
                        </Box>

                        <Button variant="contained" color="primary" sx={{ marginTop: 2, paddingX: 10, paddingY: 2 }}>
                            Save changes
                        </Button>
                    </Box>
                </Box>
                        
                <Box>
                    {/* Profile Picture */}
                    <Box sx={{ marginLeft: { xs: 0, md: 10 } }}>
                        <Typography variant="h6" sx={{ color: Colors.dark }}> Profile Picture </Typography>
                        <Box sx={{ width: 200, height: 200, backgroundColor: Colors.light, borderRadius: 5 }}>
                            {profilePicture ? (
                                <img 
                                    src={profilePicture} 
                                    alt="Profile Preview" 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }} 
                                />
                            ) : (
                                <Typography sx={{ color: Colors.darker, textAlign: 'center', lineHeight: '200px' }}>
                                    No image
                                </Typography>
                            )}
                        </Box>
                        <Button 
                            variant="outlined" 
                            component="label" 
                            color="primary" 
                            sx={{ marginTop: 2, paddingX: 4, paddingY: 2 }}
                        >
                            Change Picture
                            <input type="file" hidden onChange={handleProfilePictureChange} />
                        </Button>
                    </Box>
                    
                    {/* Banner */}
                    <Box sx={{ marginTop: 5, marginLeft: 10 }}>
                        <Typography variant="h6" sx={{ color: Colors.dark }}> Banner Preview</Typography>
                        <Box sx={{ width: 400, height: 200, backgroundColor: Colors.light, borderRadius: 5 }}>
                            {bannerImage ? (
                                <img 
                                    src={bannerImage} 
                                    alt="Banner Preview" 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }} 
                                />
                            ) : (
                                <Typography sx={{ color: Colors.darker, textAlign: 'center', lineHeight: '200px' }}>
                                    No image
                                </Typography>
                            )}
                        </Box>
                        <Button 
                            variant="outlined" 
                            component="label" 
                            color="primary" 
                            sx={{ marginTop: 2, paddingX: 4, paddingY: 2 }}
                        >
                            Change Banner
                            <input type="file" hidden onChange={handleBannerImageChange} />
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ProfileSettings;
