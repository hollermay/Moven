// Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Button } from '@mui/material';

const Login = () => {
  const [walletAddress, setWalletAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/users/${walletAddress}`);
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
          label="Wallet Address"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
