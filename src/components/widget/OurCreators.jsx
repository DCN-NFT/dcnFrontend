import { Typography, Box, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import React from 'react';
import Colors from '../../utils/Colors';

const OurCreators = () => {
    const instituitons = [
        { name: 'MKU University', description: 'MKU University is a leading institution in Kenya.' },
        { name: 'KU University', description: 'KU University is a leading institution in Kenya.' },
        { name: 'JKUAT University', description: 'JKUAT University is a leading institution in Kenya.' },
        { name: 'Strathmore University', description: 'Strathmore University is a leading institution in Kenya.' },
        { name: 'UON University', description: 'UON University is a leading institution in Kenya.' },
        { name: 'KCA University', description: 'KCA University is a leading institution in Kenya.' },
    ];

    return (
        <Box 
            sx={{
                backgroundColor: 'inherit',
                padding: 10
            }}
        >
            <Typography variant="h5" sx={{ color: Colors.light, textAlign: 'center', fontWeight: 'bold', marginBottom: 3 }}> Top Creators</Typography>
            <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}> Top Creators of NFT-based credentials on DCN.</Typography>

            <Box 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    gap: 3, 
                    marginTop: 5 ,
                    flexWrap: 'wrap'
                }}
            >
                {instituitons.map((item, index) => (
                    <Card key={index} sx={{ width: 400, margin: 2, backgroundColor: 'inherit', border: '1px solid #4a4ab1' }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: Colors.lighter, fontWeight: 'bold' }}>
                                    {item.name}
                                </Typography>
                                <Typography variant="body1" color={Colors.light}>
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                View Profile
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </Box>
    )
}

export default OurCreators