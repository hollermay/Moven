// Ride.js
const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
    driver: { type: String, required: true },
    rider: { type: String, required: true },
    startLocation: { type: String, required: true },
    endLocation: { type: String, required: true },
    fare: { type: Number, required: true },
    status: { type: String, enum: ['requested', 'accepted', 'completed'], default: 'requested' },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ride', RideSchema);
