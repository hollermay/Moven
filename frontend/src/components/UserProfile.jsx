// UserProfile.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';

const UserProfile = ({ walletAddress }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users/${walletAddress}`);
        setUser(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, [walletAddress]);

  return (
    <Box className="p-4 bg-gray-200 rounded-lg">
      {user ? (
        <div>
          <Typography variant="h4">{user.name}</Typography>
          <Typography>Rating: {user.rating}</Typography>
          <Typography>Rides Given: {user.ridesGiven}</Typography>
          <Typography>Rides Taken: {user.ridesTaken}</Typography>
        </div>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Box>
  );
};

export default UserProfile;
