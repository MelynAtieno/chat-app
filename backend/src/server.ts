import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';



const app = express();
const httpServer = createServer(app);
const PORT = 3000;

// Middleware to allow JSON requests
app.use(express.json());


// Sample route
app.get('/',(req, res) => {
    res.send('Server is running!');
});

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
io.on('connection', (socket) => {
    console.log('User connected!:', socket.id); //Each connected client gets a unique socket object with its own id.
    // Listen for chat messages and broadcast them to all connected clients
    socket.on('chat message', (msg) => {
        console.log('Message received:', msg);
        io.emit('chat message', msg)// Broadcast the message to all connected clients
    })
});
