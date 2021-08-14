import React, { createContext } from 'react';
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import UserPool from './UserPool';


const AccountContext = createContext();

const Account = props => {
    const getSession = async() =>
    await new Promise ((resolve, reject) => {
        const user = UserPool.getCurrentUser();
        if (user) {
            user.getSession((err, session) => {
                if (err) {
                    reject();
                } else {
                    resolve(session);
                }
            });
        } else {
            reject();
        }
    })
    
    
    
    const authenticate = async (email, password) => 
        await new Promise((resolve, reject) => {
            const user = new CognitoUser({ 
                Username: email,
                Pool: UserPool });
        
            const authDetails = new AuthenticationDetails({ 
                Username: email, 
                Password: password });
        
            user.authenticateUser(authDetails, {
              onSuccess: data => {
                console.log('onSuccess:', data);
                resolve(data);
              },
              
              onFailure: err => {
                console.log('onFailue:', err);
                reject(err);
              },
              
              newPasswordRequired: data => {
                console.log('newPasswordRequired:', data);
              }
              
            });
        });
    
    const logout = () => {
        const user = UserPool.getCurrentUser();
        if (user) {
            user.signOut();
            window.location.reload();
        }
    }
    
    return (
        <AccountContext.Provider value ={{
            authenticate, getSession, logout
        }}>
            {props.children}
        </AccountContext.Provider>
    
    
        );
}

export { Account, AccountContext };