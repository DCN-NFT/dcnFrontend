import React, { useState } from 'react';
import { Box, Card, Typography, TextField, Button, Grid, Paper, Drawer, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const CreateContractWidget = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [contractName, setContractName] = useState('');
    const [walletAddress, setWalletAddress] = useState('');
    const [tokenSymbol, setTokenSymbol] = useState('CRT');
    const [previewUrl, setPreviewUrl] = useState(null);


    const axios = require('axios');
    const fs = require('fs');
    const FormData = require('form-data');

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            const fileUrl = URL.createObjectURL(selectedFile);
            setPreviewUrl(fileUrl);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
        const folder = 'testing_json';
    //   const json1 = { hello: 'world' }
    //   const json2 = { hello: 'world2' }
    const generateCertID = () => {
        const prefix = "0#CRT";
        const randomString = Array.from({ length: 10 }, () =>
            String.fromCharCode(65 + Math.floor(Math.random() * 26))
        ).join(""); // Generates a 10-character random uppercase alphabet string
        return `${prefix}${randomString}`;
    };
      const contractData = {
        CertID: generateCertID(),
        contractName,
        walletAddress,
        tokenSymbol,
        logoImage: file ? file.name : null,
        createdOn: new Date().toISOString(),
    };

    // Retrieve existing data from localStorage
    const existingContracts = JSON.parse(localStorage.getItem("contracts")) || [];
    
    // Append new contract data to the existing array
    existingContracts.push(contractData);
    const jsonString = JSON.stringify(contractData, null, 2);
      
    //   const files = [
        // new File([blob1], 'hello.json', { type: 'application/json' }),
        // new File([blob2], 'hello2.json', { type: 'application/json' })
    //   ]
    const blobs = new Blob([jsonString], { type: "application/json" })
   
      const data = new FormData();
      
      Array.from(blobs).forEach((blob) => {
        data.append('file', blob, `${folder}/${blob.name}`)
      })
      
       const pinataMetadata = JSON.stringify({
            name: `${folder}`
          })
          data.append('pinataMetadata', pinataMetadata)
          const req = {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${PINATA_JWT}`,
                
            },
            body: data
          }
          
          const res = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', req)
          console.log(req, res)
          const resData = await res.json()
          console.log(resData)
        } catch (error) {
          console.log(error)
        }
    
        
        
        // Save the updated array back to localStorage
        // localStorage.setItem("contracts", JSON.stringify(existingContracts));
    
        // Optional: Alert the user or log the action
        // alert("Contract created and saved!");
        
        // Create a Blob from the JSON string and trigger a download (optional)
        // const jsonString = JSON.stringify(contractData, null, 2);
        // const blob = new Blob([jsonString], { type: "application/json" });

        // const link = document.createElement("a");
        // link.href = URL.createObjectURL(blob);
        // link.download = `${contractName || 'contract'}.json`;
        // link.click();
    };
    
    

    return (
        <>
            <Card
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    p: 6,
                    maxWidth: 900,
                    margin: 'auto',
                    backgroundColor: '#ffffff',
                    borderRadius: '15px',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                    color: '#333',
                }}
            >
                <Typography variant="h4" gutterBottom sx={{ color: '#1a237e', fontWeight: 'bold' }}>
                    Let's create a smart contract for your drop.
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                    You’ll need to deploy an ERC-721 contract onto the blockchain before you can create a drop.{' '}
                    <Button
                        href="#"
                        onClick={toggleSidebar}
                        style={{ color: '#1976d2', textDecoration: 'none', fontWeight: '500' }}
                    >
                        What is a contract?
                    </Button>
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                    <Box sx={{ mt: 2, mb: 2 }}>
                            <Typography variant="body1" gutterBottom sx={{ fontWeight: '500' }}>
                                Logo image
                            </Typography>
                            <Button
                                variant="outlined"
                                component="label"
                                sx={{
                                    width: '100%',
                                    padding: '15px',
                                    textAlign: 'center',
                                    minHeight: '150px',
                                    border: '2px dashed #1976d2',
                                    color: '#1976d2',
                                    borderRadius: '8px',
                                    '&:hover': { backgroundColor: '#e3f2fd' },
                                }}
                            >
                                {previewUrl ? (
                                    file?.type.startsWith('image/') ? (
                                        <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                                    ) : (
                                        <Box sx={{ textAlign: 'center' }}>
                                            <PictureAsPdfIcon sx={{ fontSize: 50, color: '#d32f2f' }} />
                                            <Typography variant="caption" color="textSecondary">
                                                {file.name}
                                            </Typography>
                                        </Box>
                                    )
                                ) : (
                                    "Drag and drop or click to upload"
                                )}
                                <input type="file" hidden onChange={handleFileChange} />
                            </Button>
                            <Typography variant="caption" color="textSecondary">
                                Recommended size: 350 x 350. File types: JPG, PNG, SVG, GIF, or PDF
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box sx={{ mt: 2, mb: 2 }}>
                            <Typography variant="body1" gutterBottom sx={{ fontWeight: '500' }}>
                                Add the contract name
                            </Typography>
                            <TextField
                                fullWidth
                                label="Contract name"
                                variant="outlined"
                                value={contractName}
                                onChange={(e) => setContractName(e.target.value)}
                                InputLabelProps={{ style: { color: '#666' } }}
                                sx={{
                                    input: { color: '#333' },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#1976d2' },
                                        '&:hover fieldset': { borderColor: '#1565c0' },
                                    },
                                }}
                            />
                        </Box>

                        <Box sx={{ mt: 2, mb: 2 }}>
                            <Typography variant="body1" gutterBottom sx={{ fontWeight: '500' }}>
                                Wallet address to send contract
                            </Typography>
                            <TextField
                                fullWidth
                                label="Wallet Address"
                                variant="outlined"
                                value={walletAddress}
                                onChange={(e) => setWalletAddress(e.target.value)}
                                InputLabelProps={{ style: { color: '#666' } }}
                                sx={{
                                    input: { color: '#333' },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#1976d2' },
                                        '&:hover fieldset': { borderColor: '#1565c0' },
                                    },
                                }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box sx={{ mt: 2, mb: 2 }}>
                            <TextField
                                fullWidth
                                label="Token symbol"
                                variant="outlined"
                                value={tokenSymbol}
                                onChange={(e) => setTokenSymbol(e.target.value)}
                                InputLabelProps={{ style: { color: '#666' } }}
                                sx={{
                                    input: { color: '#333' },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#1976d2' },
                                        '&:hover fieldset': { borderColor: '#1565c0' },
                                    },
                                }}
                            />
                        </Box>

                        <Box sx={{ mt: 6 }}>
                            <Typography variant="h6" gutterBottom sx={{ color: '#1a237e', fontWeight: 'bold' }}>
                                After you deploy your contract you'll be able to:
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                • Manage collection settings <br />
                                • Set up your drop <br />
                                • Prepare designs <br />
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 2 }} color="textSecondary">
                                Your community:
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                • Can’t view until published <br />
                                • Can view that you've deployed a contract
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="body1" gutterBottom sx={{ fontWeight: '500' }}>
                                Blockchain
                            </Typography>
                            <Paper
                                variant="contained"
                                fullWidth
                                sx={{
                                    backgroundColor: '#1976d2',
                                    color: '#fff',
                                    padding: '15px',
                                    borderRadius: '10px',
                                    textAlign: 'center',
                                    '&:hover': { backgroundColor: '#1565c0' },
                                }}
                            >
                                Ethereum <br />
                                <Typography variant="caption" color="inherit">
                                    Estimated cost to deploy: $9.89
                                </Typography>
                            </Paper>
                            <Paper
                                variant="contained"
                                fullWidth
                                sx={{
                                    backgroundColor: '#1976d2',
                                    color: '#fff',
                                    padding: '15px',
                                    borderRadius: '10px',
                                    textAlign: 'center',
                                    marginTop: 2,
                                    '&:hover': { backgroundColor: '#1565c0' },
                                }}
                            >
                                Base <br />
                                <Typography variant="caption" color="inherit">
                                    Estimated cost to deploy: $1.00
                                </Typography>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>

                <Button
                    variant="contained"
                    type="submit"
                    sx={{ mt: 4, backgroundColor: '#1976d2', color: '#fff' }}
                >
                    Create Contract
                </Button>
            </Card>

            <Drawer anchor="right" open={isSidebarOpen} onClose={toggleSidebar}>
                <Box sx={{ width: 300, padding: 2 }}>
                    <IconButton onClick={toggleSidebar} sx={{ float: 'right' }}>
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        What is a contract?
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        A contract is a digital agreement that defines the terms and conditions of a transaction.
                        In the context of NFTs, it specifies how the token behaves and interacts with users and the blockchain.
                    </Typography>
                </Box>
            </Drawer>
        </>
    );
};

export default CreateContractWidget;
