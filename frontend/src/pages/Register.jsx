// Register.jsx
import { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Button, FormControlLabel, Checkbox } from '@mui/material';

const Register = () => {
  const [name, setName] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [isDriver, setIsDriver] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/register', { name, walletAddress, isDriver });
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
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Wallet Address"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={isDriver}
              onChange={(e) => setIsDriver(e.target.checked)}
            />
          }
          label="Register as Driver"
        />
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
    </Box>
  );
};

export default Register;
