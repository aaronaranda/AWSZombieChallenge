import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../Button/Button';
import './Tracker.css';
import { AccountContext } from '../Users/Account';
import UserPool from '../Users/UserPool';

require('dotenv').config({path: '.env' });


const Tracker = () => {
    const [status, setStatus] = useState(false);
//    const [user, setUser] = useState(null);
//    const [userAttribute, setUserAttribute] = useState(null);
//    const [similarUsers, setSimilarUsers] = useState([]);
    const { getSession, logout } = useContext(AccountContext);
    
    useEffect(() => {
        getSession()
        .then(session => {
            console.log('Session:', session);
            setStatus(true);
            
        })
    });
    
    const getUserCount = (max) => {
        return Math.floor(Math.random() * max);
    };
    

    return (
        <div className='tracker-container'>
            <video src="/images/Zombies.mp4" autoPlay loop muted />
            <h3>Track Nearby Survivors</h3> <br/>
            <h1>There are: {getUserCount(10)} survivors near you</h1>
        </div>
    );
}

export default Tracker;
