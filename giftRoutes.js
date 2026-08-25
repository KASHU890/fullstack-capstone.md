const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('./db');

// GET all gifts
router.get('/api/gifts', async (req, res) => {
  const db = await connectToDatabase();
  const gifts = await db.collection('inserted_items').find({}).toArray();
  res.json(gifts);
});

// GET gift by id
router.get('/api/gifts/:id', async (req, res) => {
  const db = await connectToDatabase();
  const gift = await db.collection('inserted_items').findOne({ _id: req.params.id });
  res.json(gift);
});

module.exports = router;
