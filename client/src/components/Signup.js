import React from 'react';
import './SignupForm.css';
import { useNavigate } from 'react-router';
import loginPic from '../assets/loginpic.png'

export default function SignupForm() {
  const navTo = useNavigate(null);

  

  return (
    <div className="App">
      <div className="signup-container">
        <div className="signup-form">
          <h1>The Food Hub</h1>
          <h2>Create an account</h2>
          <form>
            <div className="input-group">
              <input type="text" placeholder="Full Name" name="fullname" />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email" name="email" />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" name="password" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Username" name="username" />
            </div>
            <button type="submit" className="signup-button">Signup</button>
            <p className="login-link">Already have an account? <a href="#" onClick={() => navTo("/login")}>Login</a></p>
          </form>
        </div>
        <div className="signup-image">
          <img src={loginPic} alt="Signup" />
        </div>
      </div>
    </div>
  );
}
