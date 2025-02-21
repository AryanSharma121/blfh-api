const express = require('express');
const cors = require('cors');
const bfhlRoutes = require('../routes/bfhl');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/bfhl', bfhlRoutes);

// Export the app (for Vercel serverless functions)
module.exports = app;
