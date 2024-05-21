const express = require('express');
const router = express.Router();
const User = require('./../models/user');
const { jwtAuthMiddleware, generateToken } = require('../jwt');

router.post('/signup', async (req, res) => {
    try {
        const data = req.body;
        const newUser = new User(data);
        const response = await newUser.save();
        console.log("Data saved");

        const payLoad = {
            id: response.id,
            username: response.username
        };
        console.log(JSON.stringify(payLoad));
        const token = generateToken(payLoad);
        console.log("The token is : ", token);
        res.status(200).json({ response, token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/login', async (req, res) => {
    try {
        const { AdharNumber, pass } = req.body;
        const user = await User.findOne({ AdharNumber: AdharNumber });

        if (!user || !(await user.comparePassword(pass))) {
            return res.status(401).json({ error: "Invalid username or password" });
        }
        
        const payLoad = {
            id: user.id,
            username: user.username
        };
        console.log(JSON.stringify(payLoad));
        const token = generateToken(payLoad);
        console.log("The token is : ", token);
        res.status(200).json({ response: user, token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// router.get('/profile', jwtAuthMiddleware, async (req, res) => {
//     try {
//         const userData = req.user;
//         const userId = userData.id;
//         const user = await User.findById(userId);
//         res.status(200).json({ user });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// router.put('/profile/password', jwtAuthMiddleware, async (req, res) => {
//     try {
//         const userId = req.user.id;
//         const { currentPassword, newPassword } = req.body;

//         if (!currentPassword || !newPassword) {
//             return res.status(400).json({ error: 'Both currentPassword and newPassword are required' });
//         }

//         const user = await User.findById(userId);

//         if (!user || !(await user.comparePassword(currentPassword))) {
//             return res.status(401).json({ error: 'Invalid current password' });
//         }

//         user.password = newPassword;
//         await user.save();

//         console.log('Password updated');
//         res.status(200).json({ message: 'Password updated' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

module.exports = router;
