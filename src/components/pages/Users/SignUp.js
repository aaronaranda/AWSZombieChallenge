import React, { useState } from 'react';
import './SignUp.css';
import UserPool from './UserPool';

const SignUp = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setUSState] = useState(null);  
  const [password, setPassword] = useState(null);
  const zone = city + ', ' + state;

  const onSubmit =  async (event) => {
    console.log(state);
    event.preventDefault();
    UserPool.signUp(email, password, [{Name: "zoneinfo", Value: state}], null, (err, data) => {
      if (err) {
        window.alert(err.message);
        console.log(err);
      } else {
        window.alert("Success!");
        window.alert("An email was sent! Please verify before logging in.");
      }
    });
  }
  
  return (
    <div class="container">
      <form action="./something.php" onSubmit={onSubmit}>
        <h3>Sign Up</h3> <br /> 
        Name <input
                type="text"
                name="NAME" 
                onChange={event => setName(event.target.value)} 
                placeholder="Name..."
                required 
        /> <br/>
        Email <input 
                type="text" 
                name="EMAIL"  
                onChange={event => setEmail(event.target.value)} 
                placeholder="Email..."
                required
        /> <br/>
        City <input 
                type="text" 
                name="CITY" 
                onChange={event => setCity(event.target.value)}
                placeholder="Your city..."
              /> <br/>
        State <input 
                type="text" 
                name="STATE" 
                onChange={event => setUSState(event.target.value)} 
                placeholder="Your state..."
        /> <br/>
       Password <input 
                    type="password" 
                    name="PASSWORD"
                    id="pass"
                    minlength="8"
                    onChange={event => setPassword(event.target.value)}
                    placeholder="Password..."
                    required                   
        /> <br/>
        <input type="submit" name = "submit" value="Sign Up"/>
      </form>
    </div>
  );
}


export default SignUp;


