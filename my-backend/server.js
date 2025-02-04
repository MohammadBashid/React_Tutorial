const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse incoming JSON data
app.use(express.json());

// Basic route to test server
app.get('/', (req, res) => {
  res.send('Hello, Backend');
});

// Example of an API route
app.get('/api/data', (req, res) => {
  res.json({ message: 'This is data from the back-end' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
