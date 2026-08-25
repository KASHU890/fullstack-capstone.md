const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('./db');

// Login route
router.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const db = await connectToDatabase();
  
  // findOne method se user locate kar rahe hain
  const user = await db.collection('users').findOne({ email: email }); 
  
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  // password check logic yahan ayega
  res.json({ message: 'Login successful', user });
});

module.exports = router;
