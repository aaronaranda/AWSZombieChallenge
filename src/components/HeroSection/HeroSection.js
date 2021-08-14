import React from 'react';
import '../../App.css';
import { Button } from '../../Button/Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="hero-container">
      {/* this is where we could a put large pic/vid for the zombie app */}
      <video src="/images/undead-hand.mp4" autoPlay loop muted />
      <h1>SURVIVAL</h1> {/* main title that you see right away */}
      <p>Join the fight!</p> {/* little comment under the main header */}
      <div className="hero-btns">
        <Link to="/sign-up">
          <Button 
            className="btns" 
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >SIGN UP</Button>
        </Link>
        <Link to="/login">
          <Button 
            className="btns" 
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >LOGIN</Button>        
        </Link>
      </div>
    </div>
  )

}

export default HeroSection;
