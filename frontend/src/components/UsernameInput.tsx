import '../styles/UsernameInput.css';
import { useNavigate } from 'react-router-dom';

function UsernameInput() {
    const navigate = useNavigate();
    
    const handleJoin = () => {
        navigate('/chat');
    }
  return (
    <>
    <div className='input-form'>
          <form>
            <input className='username-input' type="text" placeholder="Enter username" />
          </form>
          <button onClick={handleJoin}>JOIN</button>
    </div>

        
    </>
  );
}
export default UsernameInput;