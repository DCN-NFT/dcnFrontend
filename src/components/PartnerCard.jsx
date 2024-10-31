import React from "react";
import Slider from "react-slick";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";


const instituitons = [
  { name: 'MKU University', description: 'MKU University is a leading institution in Kenya.', logo: 'https://theinformer.co.ke/wp-content/uploads/2022/04/MKUS-1.png' },
  { name: 'KU University', description: 'KU University is a leading institution in Kenya.', logo: 'https://theinformer.co.ke/wp-content/uploads/2022/04/MKUS-1.png' },
  { name: 'JKUAT University', description: 'JKUAT University is a leading institution in Kenya.', logo: 'https://theinformer.co.ke/wp-content/uploads/2022/04/MKUS-1.png' },
  { name: 'Strathmore University', description: 'Strathmore University is a leading institution in Kenya.', logo: 'https://theinformer.co.ke/wp-content/uploads/2022/04/MKUS-1.png' },
  { name: 'UON University', description: 'UON University is a leading institution in Kenya.', logo: 'https://theinformer.co.ke/wp-content/uploads/2022/04/MKUS-1.png' },
  { name: 'KCA University', description: 'KCA University is a leading institution in Kenya.', logo: 'https://theinformer.co.ke/wp-content/uploads/2022/04/MKUS-1.png' },
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
    <Box sx={{ maxWidth: "100%", margin: "0 auto", paddingY: "3rem", backgroundColor: '#090c2c' }}>
      <Slider {...settings} style={{ backgroundColor: "#090c2c", padding: "25px", borderRadius: "8px", height: 300 }}>
        {instituitons.map((item, index) => (
          <Box key={index} sx={{ padding: "0 1rem", background: '#090c2c' }}>
            <Card sx={{ 
              height: 250, 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "center", 
              backgroundColor: '#090c2c',
              boxShadow: '0 5px 10px rgba(255, 255, 255, 1)',
              borderRadius: '15px',
              marginY: 2 ,
               paddingX: 4,
            }}>
              <CardContent sx={{ backgroundColor: 'transparent' }} display="flex" justifyContent="space-between">

                <Box>
                  <Typography variant="h4" component="div" gutterBottom sx={{ color: 'white' }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ color: 'white' }}>
                    {item.description}
                  </Typography>
                </Box>

                <Box>
                  <img src={item.logo} alt="" 
                      width="100"
                    />
                </Box>
              </CardContent>


            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default PartnerCard;
