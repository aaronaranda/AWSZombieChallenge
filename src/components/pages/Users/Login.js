import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AccountContext } from './Account';
import './Login.css';
import UserPool from './UserPool';


require('dotenv').config({path: '.env' });

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const history = useHistory();
  
  const { authenticate } = useContext(AccountContext);
  
  const onSubmit = async event => {
    event.preventDefault();
    authenticate(email, password)
    .then (data => {
      console.log('Logged in!', data);
      window.alert("Logged in!");
      history.push("/")
      
    })
    .catch(err => {
      console.error('Failed to login!', err);
      window.alert("Failed to login!");
    })
    
  };
  
  
  

  return (
    <div class="container">
      <form onSubmit={onSubmit}>
        <h3>Login</h3>  
        Email: <input type="text" value={email} onChange={event => setEmail(event.target.value)} required/> <br/>
        Password: <input type="password" value={password} onChange={event => setPassword(event.target.value)} required /> <br/>
        <input type="submit" value="Login"/>
      </form>
    </div>
  );
}


export default Login;
