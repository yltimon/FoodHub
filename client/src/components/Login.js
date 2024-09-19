import './LoginForm.css';
import React, { useState } from 'react';
import loginPic from '../assets/loginpic.png';
import { useNavigate } from 'react-router';

export default function LoginForm({setIsLoggedIn}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = {

  };

  return (

    <div className="App">
      <div className="login-container">
        <div className="login-form">
          <h1>The Food Hub</h1>
          <h2>Welcome Back!</h2>
          <h3>Login to your account.</h3>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="login-button">Login</button>
            <p className="signup-link">Don't have an account? <a href="#" onClick={() => navigate("/signup")}>Sign up</a></p>

          </form>
        </div>
        <div className="login-image">
          <img src={loginPic} alt="Login" />
        </div>
      </div>
    </div>
  );
}
