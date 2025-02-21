const express = require('express');
const cors = require('cors');
const bfhlRoutes = require('../routes/bfhl');  // Notice the relative path

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/bfhl', bfhlRoutes);

// Export the app (for Vercel serverless functions)
const server = require('http').createServer(app);
module.exports = (req, res) => {
  server.emit('request', req, res);
};
