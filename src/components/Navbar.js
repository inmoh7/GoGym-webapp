import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        gap: { sm: '50px', xs: '20px' },
        justifyContent: 'start',
        alignItems: 'center',
        background: '#1c1c1c',
        paddingX: { lg: '50px', md: '35px', sm: '25px' },
        paddingY: '20px',
      }}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{
            width: '60px',
            height: '55px',
            margin: '0 20px',
          }}
        />
      </Link>
      <Stack direction="row" gap="30px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: 'white',
            borderBottom: '3px solid #FF2625',
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: 'none',
            color: 'white',
          }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
