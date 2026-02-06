import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import UsernameInput from './components/UsernameInput'
import ChatScreen from './components/ChatScreen'



function App() {
  
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
