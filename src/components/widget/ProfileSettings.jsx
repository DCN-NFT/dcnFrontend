import { Box, Typography, TextField, Button } from '@mui/material';
import Colors from '../../utils/Colors';
import React, { useState } from 'react';
import { useAppContext } from '../../context/AppProvider';
import institutionDemoData from '../DemoData/demoData'; // Adjust the path as necessary

const ProfileSettings = () => {
    const { connectedWallet } = useAppContext();

    // States to store selected images and institution details
    const [profilePicture, setProfilePicture] = useState(null);
    const [bannerImage, setBannerImage] = useState(null);
    
    // States for institution details
    const [institutionDetails, setInstitutionDetails] = useState({
        name: institutionDemoData.name,
        establishedYear: institutionDemoData.establishedYear,
        contactEmail: institutionDemoData.contactEmail,
        phoneNumber: institutionDemoData.phoneNumber,
        address: institutionDemoData.address,
        website: institutionDemoData.website,
        affiliations: institutionDemoData.affiliations,
        about: institutionDemoData.about,
        socialMedia: institutionDemoData.socialMedia
    });

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

    // Handler for input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInstitutionDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    // Handler for saving changes
    const handleSaveChanges = () => {
        // Update the demo data with current state
        institutionDemoData.name = institutionDetails.name;
        institutionDemoData.establishedYear = institutionDetails.establishedYear;
        institutionDemoData.contactEmail = institutionDetails.contactEmail;
        institutionDemoData.phoneNumber = institutionDetails.phoneNumber;
        institutionDemoData.address = institutionDetails.address;
        institutionDemoData.website = institutionDetails.website;
        institutionDemoData.affiliations = institutionDetails.affiliations;
        institutionDemoData.about = institutionDetails.about;
        institutionDemoData.socialMedia = institutionDetails.socialMedia;

        // You can also implement any additional logic after saving
        console.log('Institution details updated:', institutionDemoData);
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

                    {/* Institution Name */}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h6" sx={{ color: Colors.darker }}> Institution Name </Typography>
                        <TextField
                            name="name"
                            value={institutionDetails.name}
                            onChange={handleInputChange}
                            variant="outlined"
                            sx={{ marginTop: 2, width: 400 }}
                        />
                    </Box>

                    {/* Established Year */}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h6" sx={{ color: Colors.darker }}> Established Year </Typography>
                        <TextField
                            name="establishedYear"
                            value={institutionDetails.establishedYear}
                            onChange={handleInputChange}
                            variant="outlined"
                            sx={{ marginTop: 2, width: 400 }}
                        />
                    </Box>

                    {/* Contact Email */}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h6" sx={{ color: Colors.darker }}> Contact Email </Typography>
                        <TextField
                            name="contactEmail"
                            value={institutionDetails.contactEmail}
                            onChange={handleInputChange}
                            variant="outlined"
                            sx={{ marginTop: 2, width: 400 }}
                        />
                    </Box>

                    {/* Phone Number */}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h6" sx={{ color: Colors.darker }}> Phone Number </Typography>
                        <TextField
                            name="phoneNumber"
                            value={institutionDetails.phoneNumber}
                            onChange={handleInputChange}
                            variant="outlined"
                            sx={{ marginTop: 2, width: 400 }}
                        />
                    </Box>

                    {/* Address */}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h6" sx={{ color: Colors.darker }}> Address </Typography>
                        <TextField
                            name="address"
                            value={institutionDetails.address}
                            onChange={handleInputChange}
                            variant="outlined"
                            sx={{ marginTop: 2, width: 400 }}
                        />
                    </Box>

                    {/* Website */}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h6" sx={{ color: Colors.darker }}> Website </Typography>
                        <TextField
                            name="website"
                            value={institutionDetails.website}
                            onChange={handleInputChange}
                            variant="outlined"
                            sx={{ marginTop: 2, width: 400 }}
                        />
                    </Box>

                    {/* Affiliations */}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h6" sx={{ color: Colors.darker }}> Affiliations </Typography>
                        <TextField
                            name="affiliations"
                            value={institutionDetails.affiliations}
                            onChange={handleInputChange}
                            variant="outlined"
                            sx={{ marginTop: 2, width: 400 }}
                            multiline
                            rows={2}
                        />
                    </Box>

                    {/* About */}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h6" sx={{ color: Colors.darker }}> About </Typography>
                        <TextField
                            name="about"
                            value={institutionDetails.about}
                            onChange={handleInputChange}
                            variant="outlined"
                            sx={{ marginTop: 2, width: 400 }}
                            multiline
                            rows={4}
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

                        <Button 
                            variant="contained" 
                            color="primary" 
                            sx={{ marginTop: 2, paddingX: 10, paddingY: 2 }}
                            onClick={handleSaveChanges} // Add the click handler
                        >
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
    );
};

export default ProfileSettings;
