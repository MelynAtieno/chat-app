import { useNavigate } from 'react-router-dom';
import '../styles/ChatScreen.css';


function ChatScreen() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
  }
  return (
    <>
    <div>
      <h1>Start Chatting!!!!!</h1>
      <button onClick = {handleBack}>BACK</button>
    </div>
    <div>
      <input className='text-input' type="text" placeholder="Type a message..." />
      <button>SEND</button>
    </div>
    </>
  );
}

export default ChatScreen;