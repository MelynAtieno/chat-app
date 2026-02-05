import { useNavigate } from 'react-router-dom';
import '../styles/ChatScreen.css';
import { useState, useEffect } from 'react';
import {io} from 'socket.io-client';

const socket = io('http://localhost:3000');

function ChatScreen() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
  }
  const username = localStorage.getItem('username') || 'Anonymous';

  // Listen for incoming messages from the server
  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
    // Cleanup when component unmounts. This prevents memory leaks and ensures that the event listener is removed when the component is no longer in use.
    return () => {
      socket.off('chat message')
    };
  }, []);

  const [messages, setMessages] = useState<{username: string, text: string; senderId: string, timestamp: string}[]>([]); 
  const [inputText, setInputText] = useState('');


  
  // Handle sending a message
  const handleSend = () => {
    // Logic to send message
    if (inputText.trim() !== '') {
      // Take the current input value and add it to the messages array
      //setMessages([...messages, inputText]);
      socket.emit('chat message', {
        username: username,
        text: inputText,
        senderId: socket.id,
        timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})       
      }); // Send the message to the server
      setInputText(''); // clear the input field
    } else {
      alert('Please enter a message before sending.');
    }         
  };

  // Display messages
  const renderedMessages = messages.map((msg, index) => {
    const isMyMessage = msg.senderId === socket.id;
    return (
      <div key={index} className={`message ${isMyMessage ? 'my-message' : 'other-message'}`}>
        <div className='message-username'>{msg.username}</div>
        <div className='message-text'>{msg.text}</div>
        <div className='message-timestamp'>{msg.timestamp}</div>
      </div>
    );
  });

  return (
    <div className="chat-container">
      {/* Header Section - Top */}
      <div className="chat-header">
        <button onClick={handleBack}>LEAVE</button>
      </div>

      {/* Messages Section - Middle (expands to fill space) */}
      <div className="chat-messages">
           {renderedMessages}        
      </div>

      {/* Input Section - Bottom */}
      <div className="chat-input-section">
        <input className="text-input" value={inputText} onChange={(e) => setInputText(e.target.value)} type="text" placeholder="Type a message..." />
        <button onClick={handleSend}>SEND</button>
      </div>
    </div>
  );
}

export default ChatScreen;