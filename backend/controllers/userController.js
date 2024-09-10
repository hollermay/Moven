// userController.js
const User = require('../models/User');

exports.registerUser = async (req, res) => {
    try {
        const { walletAddress, name, isDriver } = req.body;
        const newUser = new User({ walletAddress, name, isDriver });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await User.findOne({ walletAddress: req.params.walletAddress });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
