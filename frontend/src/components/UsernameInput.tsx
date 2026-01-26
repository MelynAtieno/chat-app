import '../styles/UsernameInput.css';

function UsernameInput() {
  return (
    <>
    <div className='input-form'>
          <form>
            <input className='username-input' type="text" placeholder="Enter username" />
          </form>
          <button>JOIN</button>
    </div>

        
    </>
  );
}
export default UsernameInput;