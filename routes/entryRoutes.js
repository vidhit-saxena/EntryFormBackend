// routes/entryRoutes.js
const express = require('express');
const { createEntry, getEntries } = require('../controllers/entryController');

const router = express.Router();

// POST route for creating an entry
router.post('/entries', createEntry);

// GET route for fetching entries (optional)
router.get('/entries', getEntries);

module.exports = router;
