const express = require('express');
const cors = require('cors');
const dataRouter = require('./routes/data');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/data', dataRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
