import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import UsernameInput from './components/UsernameInput'
import ChatScreen from './components/ChatScreen'
import {io} from 'socket.io-client'



function App() {

  const socket = io('http://localhost:3000');
  socket.on('connect', () => {
    console.log('Connected!', socket.id);
  });


  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {
        <div className='landing-page'>
          <h1 className='welcome'>Welcome to Chat App!</h1>        
          <UsernameInput />
        </div>
      } />

      <Route path = "/chat" element = {<ChatScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
