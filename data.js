const express = require('express');
const pool = require('../db');

const router = express.Router();

// GET all data
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM customer_data');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
