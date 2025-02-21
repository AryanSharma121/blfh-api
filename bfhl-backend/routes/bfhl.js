const express = require('express');
const router = express.Router();
const { handlePost, handleGet } = require('../controllers/bfhlController');

// POST Request Handler
router.post('/', handlePost);

// GET Request Handler
router.get('/', handleGet);

module.exports = router;
