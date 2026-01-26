
import { useNavigate } from 'react-router-dom';



function ChatScreen() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
  }
  return (
    <div>
      <h1>Start Chatting!!!!!</h1>
      <button onClick = {handleBack}>BACK</button>
    </div>
  );
}

export default ChatScreen;