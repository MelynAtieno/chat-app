import { useNavigate } from 'react-router-dom';
import '../styles/ChatScreen.css';
import { useState } from 'react';


function ChatScreen() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
  }

  const [messages, setMessages] = useState<string[]>([]); 
  const [inputText, setInputText] = useState('');


  
  // Handle sending a message
  const handleSend = () => {
    // Logic to send message
    if (inputText.trim() !== '') {
      setMessages([...messages, inputText]);
      setInputText('');
    } else {
      alert('Please enter a message before sending.');
    } 
        
  }

  // Display messages
  const renderedMessages = messages.map((msg, index) => (
    <>
    <div key={index} className="message">
      {msg}
    </div>
    <div key={index} className="message2">
      {msg}
    </div>
    </>
  ));

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