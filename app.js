const express = require('express');
const app = express();
const searchRoutes = require('./searchRoutes');
const giftRoutes = require('./giftRoutes');

app.use(express.json());

// Routes use karna
app.use('/', searchRoutes); 
app.use('/', giftRoutes);    // isme /api/search route hai

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
