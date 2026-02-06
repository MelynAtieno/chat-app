import dotenv from 'dotenv';
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import { Message } from './models/message';

dotenv.config(); // Load environment variables from .env file

const app = express();
const httpServer = createServer(app);
const PORT = 3000;

// Middleware to allow JSON requests
app.use(express.json());


// Sample route
app.get('/',(req, res) => {
    res.send('Server is running!');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI!)
    .then(() => console.log('Connected to MongoDB!'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Start the server
httpServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})

// Create a socket.io server and attach it to the HTTP server
const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST']
    }
});

// Listen for socket connections
io.on('connection', async (socket) => {
    console.log('User connected!:', socket.id); //Each connected client gets a unique socket object with its own id.

    // Send chat history to the new user
    try{
        const messages = await Message.find().sort({ createdAt: 1 }).limit(100); // Fetch the last 100 messages, sorted by creation time
        socket.emit('chat history', messages);
    } catch (err) {
        console.error('Error fetching chat history:', err);
    }
    // Listen for chat messages and broadcast them to all connected clients
    socket.on('chat message', async (msg) => {
        console.log('Message received:', msg);
        
        // Save the message to the database
        try {
            const newMessage = new Message(msg);
            await newMessage.save();
            console.log('Message saved to database!');
        } catch (err) {
            console.error('Error saving message to database:', err);
        }
        io.emit('chat message', msg)// Broadcast the message to all connected clients

    })
    
});
