import React, { useState } from 'react';
import { Paper, Box, CardContent, Typography, IconButton, Tooltip } from '@mui/material';
import MoreVert from '@mui/icons-material/MoreVert';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import user from '../../assets/user.png';
import cert from '../../assets/cert.png';
import Colors from '../../utils/Colors';
import whyChooseUs from '../../assets/whyChooseUs.png';

const CertificateCard = ({ nft }) => {
    const [copySuccess, setCopySuccess] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(nft.id);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000); // Reset tooltip after 2 seconds
    };

    // create a 12 digit random number for the cert id display on the first 6 digit others hide according to the nft id
    const certId = (id) => {
        return ['176351567'].slice(0, 6) + '*****';
    }

    return (
        <Paper 
            elevation={4}
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                borderRadius: 2, 
                height: 430,
                minWidth: 340,
                // background: 'linear-gradient(45deg, #4a4ab1, violet)',
                color: 'white',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden'
            }}
        >
            <CardContent>
                {/* Top section with user info */}
                <Box display='flex' gap={2} alignItems='center'>
                    <img src={user} alt="user" style={{ width: 60, height: 60, borderRadius: 5 }} />

                    <Box>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: Colors.dark }}>{nft.title}</Typography>
                        <Typography variant="body2" sx={{ color: Colors.dark }}>{nft.description}</Typography>
                    </Box>

                    <IconButton sx={{ marginLeft: 'auto', color: Colors.lighter }}>
                        <MoreVert />
                    </IconButton>
                </Box>

                {/* Certificate Image */}
                <Box 
                    sx={{ 
                        marginTop: 2,
                        borderRadius: 2,
                        border: '3px solid white',
                        // overflow: 'hidden',
                        minHeight: 200,
                    }}
                >
                    <img src={whyChooseUs} alt="Certificate" style={{ width: '100%', height: 200 }} />
                </Box>

                {/* Certificate Details */}
                <Box sx={{ marginTop: 2 }}>
                    <Tooltip title={copySuccess ? "Copied!" : "Copy Certificate ID"}>
                        <Box display="flex" alignItems="center" sx={{ cursor: 'pointer' }} onClick={handleCopy} justifyContent="space-between">
                            <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'black' }}>Certificate ID: </Typography>
                            <Box sx={{ backgroundColor: Colors.light, padding: 0.5, borderRadius: 2, marginLeft: 1, color: Colors.dark }}>
                                {certId(nft.id)}
                                <FileCopyIcon sx={{ fontSize: 18, color: 'black', marginLeft: 0.5 }} />
                            </Box>
                        </Box>
                    </Tooltip>
                    <Typography variant="body2" sx={{ color: Colors.dark, marginTop: 1 }}>Institution: Example University</Typography>
                    <Typography variant="body2" sx={{ color: Colors.dark }}>Created On: {new Date().toLocaleDateString()}</Typography>
                </Box>
            </CardContent>
        </Paper>
    );
};

export default CertificateCard;
