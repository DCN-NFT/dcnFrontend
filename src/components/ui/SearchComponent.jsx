import React from 'react';
import { Box, Button, Select, MenuItem, TextField, IconButton, Typography } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView'; // For grid icon
import ListIcon from '@mui/icons-material/List'; // For list icon
import Colors from '../../utils/Colors';

const SearchComponent = () => {
    return (
        <Box 
            sx={{ 
                // backgroundColor: 'white', 
                padding: 2, 
                borderRadius: 2, 
                width: '100%', 
                marginTop: 1
                
            }}
            >
            {/* Filter Section */}
            <Box 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    paddingY: 2,
                    borderTop: '1px solid rgba(0,0,0,0.1)',
                    borderBottom: '1px solid rgba(0,0,0,0.1)',
                    marginBottom: 3 
                }}
            >
                {/* Filters and Search */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Button variant="outlined" sx={{ height: '40px' }}>Status</Button>
                    <Button variant="outlined" sx={{ height: '40px' }}>Chains</Button>
                    <TextField
                        variant="outlined"
                        placeholder="Search by name"
                        size="small"
                        sx={{ width: '300px' }}
                    />
                </Box>

                {/* Dropdown and Icons */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Select
                        variant="outlined"
                        value="recently-received"
                        sx={{ height: '40px' }}
                    >
                        <MenuItem value="recently-received">Recently received</MenuItem>
                        <MenuItem value="recently-sent">Recently sent</MenuItem>
                    </Select>
                    <IconButton>
                        <ListIcon />
                    </IconButton>
                    <IconButton>
                        <GridViewIcon />
                    </IconButton>
                </Box>
            </Box>

            {/* Empty State Message */}
            <Box 
                sx={{ 
                    textAlign: 'center', 
                    padding: 4, 
                    backgroundColor: '#f0f0f0', 
                    borderRadius: 2,
                    height: '300px',
                    border: '1px solid rgba(0,0,0,0.1)',
                }}
            >
                <Typography variant="h3" sx={{fontWeight: 'bold', color: Colors.dark}}>
                    No items found for this search
                </Typography>
                <Button variant="contained" sx={{ backgroundColor: '#1E90FF', paddingY: 2, paddingX: 7, my: 5, borderRadius: 5 }}>
                    Back to all items
                </Button>
            </Box>
        </Box>
    );
};

export default SearchComponent;
