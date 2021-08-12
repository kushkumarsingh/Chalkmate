import React from 'react';
import './Signin.css';

function Signin(){

  return (
    <div className='signin-container'>
      <div className='signin-container-left'>
          <div className='signin-heading'>
              <div>Sign up</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</div>
          </div>
          <div className='sigin-input'>
              <input className='signin-field' type="email" placeholder="Email" />
              <input className='signin-field' type="password" placeholder="Password" />
              <input className='signin-field' type="password" placeholder="Confirm Password" />
              <button className='button signin-btn'>Create account</button>
          </div>
      </div>
      <div className='signin-container-right'>
        <div>
          <img src="Assets/logo-white.svg" alt="#" />
          <div>Edmodo is a global education network that helps connect all learners with the people and resources needed to reach their full potential.</div>
        </div>
          <img src="Assets/signin-bg.svg" alt="#" />
      </div>
    </div>
  );
}

export default Signin;