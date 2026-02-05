import '../styles/UsernameInput.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function UsernameInput() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');  
    
    const handleJoin = () => {
      if (username.trim() !== '') {
        localStorage.setItem('username', username)
        navigate('/chat');
      } else {
        alert('Please enter a username before joining the chat.');
      }
    };

  return (
    <>
    <div className='input-form'>
          <form>
            <input
             className='username-input' 
             type="text" 
             placeholder="Enter username"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
              />
          </form>
          <button onClick={handleJoin}>JOIN</button>
    </div>

        
    </>
  );
}
export default UsernameInput;