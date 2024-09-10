// RideBooking.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Button } from '@mui/material';

const RideBooking = () => {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [fare, setFare] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/rides/request', {
        driver: 'driver_wallet_address',
        rider: 'rider_wallet_address',
        startLocation,
        endLocation,
        fare
      });
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box className="p-4 bg-gray-200 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          fullWidth
          variant="outlined"
          label="Start Location"
          value={startLocation}
          onChange={(e) => setStartLocation(e.target.value)}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="End Location"
          value={endLocation}
          onChange={(e) => setEndLocation(e.target.value)}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Fare"
          type="number"
          value={fare}
          onChange={(e) => setFare(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Request Ride
        </Button>
      </form>
    </Box>
  );
};

export default RideBooking;
