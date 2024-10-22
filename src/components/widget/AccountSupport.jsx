import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, TextField, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Colors from '../../utils/Colors'; // Assuming you have a Colors utility

const AccountSupport = () => {
    return (
        <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 4, borderRadius: 2, color: Colors.lighter }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>Account support</Typography>
            <Typography variant="body1" sx={{ marginBottom: 4 }}>If you need help related to your account, we can help you.</Typography>

            {/* General Help Section */}
            <Accordion sx={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: Colors.lighter }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: Colors.lighter }} />}>
                <Typography sx={{ fontWeight: 'bold' }}>General help</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>Visit our help center to learn how to get started with buying, selling, and creating.</Typography>
                </AccordionDetails>
            </Accordion>

            {/* Contact Support Section */}
            <Accordion sx={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: Colors.lighter, marginTop: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: Colors.lighter }} />}>
                <Typography sx={{ fontWeight: 'bold' }}>Contact DCN Support</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>Can't find the answers you’re looking for? You can submit a request here.</Typography>
                </AccordionDetails>
            </Accordion>

            {/* Compromised Account Section */}
            <Accordion sx={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: Colors.lighter, marginTop: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: Colors.lighter }} />}>
                <Typography sx={{ fontWeight: 'bold' }}>Help with a compromised account</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography sx={{ marginBottom: 2 }}>
                    If you believe your account has been compromised, let us know and we can lock your account.
                    This will disable items in your wallet from being bought, sold, or transferred using DCN.
                </Typography>
                <TextField
                    placeholder="Describe your issue"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: Colors.lighter }}
                />
                <Button variant="contained" color="error" sx={{ marginTop: 2 }}>Lock account</Button>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default AccountSupport;
