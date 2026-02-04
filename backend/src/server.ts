import express from 'express';

const app = express();
const PORT = 3000;

// Middleware to allow JSON requests
app.use(express.json());

// Sample route
app.get('/',(req, res) => {
    res.send('Server is running!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})