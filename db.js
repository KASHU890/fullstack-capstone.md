const { MongoClient } = require('mongodb');

let db;

async function connectToDatabase() {
  const client = new MongoClient(process.env.MONGO_URL);
  await client.connect();  // <-- ye line zaroori hai
  db = client.db('capstoneDB');
  return db;
}

module.exports = { connectToDatabase, db };
