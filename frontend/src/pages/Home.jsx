// Home.jsx
import React from 'react';
import RideBooking from '../components/RideBooking';
import { Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container className="p-4">
      <Typography variant="h2" className="mb-4">Welcome to Moven</Typography>
      <RideBooking />
    </Container>
  );
};

export default Home;
