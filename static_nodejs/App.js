// Import necessary modules
const express = require('express');
const path = require('path');

// Create a new express application
const app = express();

// Define the path to your static files (HTML, CSS, JS, images, etc.)
const staticPath = path.join(__dirname, '/public');

// Use express.static middleware to serve static files
app.use(express.static(staticPath));

// Define a route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(staticPath, '/index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
