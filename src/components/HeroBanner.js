import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.jpg';

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '70px' }, ml: { sm: '50px' } }} p="20px">
      <Stack
        direction="row"
        sx={{ gap: { lg: '250px', md: '150px', sm: '80', xs: '20px' } }}
      >
        <Stack direction="column">
          <Typography color="#FF2625" fontWeight="600" fontSize="65px">
            Fitness Club
          </Typography>
          <Typography
            fontWeight={700}
            sx={{ fontSize: { lg: '44px', xs: '40px' } }}
          >
            Sweat, Smile and repeat
          </Typography>
          <Typography fontSize="18px" lineHeight="35px" mb={2}>
            Checkout the most effective exercises
          </Typography>
          <Button
            variant="contained"
            color="error"
            href="#exercises"
            sx={{
              backgroundColor: '#ff2625',
              width: '35%',
            }}
            p={10}
          >
            Explore
          </Button>
          <Typography
            fontWeight={600}
            color="#FF2625"
            sx={{
              opacity: 0.25,
              display: { lg: 'block', xs: 'none' },
            }}
            fontSize="120px"
          >
            Exercise
          </Typography>
        </Stack>
        <Stack>
          {' '}
          <img
            src={HeroBannerImage}
            className="hero-banner-img"
            alt="banner"
          ></img>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HeroBanner;
