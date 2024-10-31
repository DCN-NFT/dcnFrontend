import React from "react";
import Slider from "react-slick";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";


const instituitons = [
  { name: 'MKU University', description: 'MKU University is a leading institution in Kenya.' },
  { name: 'KU University', description: 'KU University is a leading institution in Kenya.' },
  { name: 'JKUAT University', description: 'JKUAT University is a leading institution in Kenya.' },
  { name: 'Strathmore University', description: 'Strathmore University is a leading institution in Kenya.' },
  { name: 'UON University', description: 'UON University is a leading institution in Kenya.' },
  { name: 'KCA University', description: 'KCA University is a leading institution in Kenya.' },
];

function PartnerCard({ items = [] }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <Box sx={{ maxWidth: "100%", margin: "0 auto", paddingY: "3rem", backgroundColor: 'green' }}>
      <Slider {...settings} style={{ backgroundColor: "#yellow", padding: "10px", borderRadius: "8px" }}>
        {instituitons.map((item, index) => (
          <Box key={index} sx={{ padding: "0 1rem", background: 'orange' }}>
            <Card sx={{ 
              height: 250, 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "space-between", 
              backgroundColor: '#090c2c',
              boxShadow: 'none' ,
              borderRadius: '15px',
            }}>
              <CardContent sx={{ backgroundColor: 'transparent' }}>
                <Typography variant="h4" component="div" gutterBottom sx={{ color: 'white' }}>
                  {item.name}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ color: 'white' }}>
                  {item.description}
                </Typography>
              </CardContent>
              <Box textAlign="center" sx={{ paddingBottom: "1rem", backgroundColor: 'transparent' }}>
                <Button variant="outlined" color="primary"
                >
                  View Profile
                </Button>
              </Box>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default PartnerCard;
