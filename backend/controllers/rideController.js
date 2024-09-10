// rideController.js
const Ride = require('../models/Ride');

exports.requestRide = async (req, res) => {
    try {
        const { driver, rider, startLocation, endLocation, fare } = req.body;
        const newRide = new Ride({ driver, rider, startLocation, endLocation, fare });
        await newRide.save();
        res.status(201).json(newRide);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getRide = async (req, res) => {
    try {
        const ride = await Ride.findById(req.params.id);
        if (!ride) return res.status(404).json({ message: 'Ride not found' });
        res.json(ride);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
