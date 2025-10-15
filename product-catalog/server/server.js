const express = require('express');
const cors = require('cors');
const products = require('./data/products');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allows cross-origin requests from our frontend

// API Route
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});