import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupForm from './components/Signup';
import LoginForm from './components/Login';
import ProfilePage from './components/ProfilePage';
import Landing2 from './components/landingPage2';
import Blog2 from './components/Blog2';
import NavBar from './components/Navbar'
import ChatBot from "./components/Chatbot";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Landing2 />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/blog" element={!isLoggedIn ? <Blog2 /> : <LoginForm setIsLoggedIn={setIsLoggedIn} /> } />
        <Route path="/profile" element={isLoggedIn ? <ProfilePage /> : <LoginForm setIsLoggedIn={setIsLoggedIn} /> } />
        <Route path='/chatbot' element={<ChatBot />} />
      </Routes>
    </Router>
  );
}

export default App;
