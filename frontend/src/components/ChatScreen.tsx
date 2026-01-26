import { useNavigate } from 'react-router-dom';
import '../styles/ChatScreen.css';


function ChatScreen() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
  }
  return (
    <div className="chat-container">
      {/* Header Section - Top */}
      <div className="chat-header">
        <h1>Start Chatting!!!!!</h1>
        <button onClick={handleBack}>BACK</button>
      </div>

      {/* Messages Section - Middle (expands to fill space) */}
      <div className="chat-messages">
        {/* Messages will go here */}
      </div>

      {/* Input Section - Bottom */}
      <div className="chat-input-section">
        <input className="text-input" type="text" placeholder="Type a message..." />
        <button>SEND</button>
      </div>
    </div>
  );
}

export default ChatScreen;