const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('./db');

// GET /api/search?category=Electronics
router.get('/api/search', async (req, res) => {
  const { category } = req.query;
  const db = await connectToDatabase();
  
  let query = {};
  if (category) {
    query = { category: category }; // category ke hisaab se filter
  }
  
  const results = await db.collection('inserted_items').find(query).toArray();
  res.json(results);
});

module.exports = router;
