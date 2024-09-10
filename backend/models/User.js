// User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    walletAddress: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    isDriver: { type: Boolean, default: false },
    rating: { type: Number, default: 0 },
    ridesGiven: { type: Number, default: 0 },
    ridesTaken: { type: Number, default: 0 }
});

module.exports = mongoose.model('User', UserSchema);
