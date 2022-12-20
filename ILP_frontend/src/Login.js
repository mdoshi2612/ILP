import React from 'react'
import ReactDOM from "react-dom"
import './login.css';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import NavbarHome from './NavbarHome';
import { NavLink } from 'react-router-dom';

function Login() { 
        const [email, setEmail] = useState('');
        const [password, setPass] = useState('');
        const history = useHistory();

        const handleSubmit = (e) => {
            e.preventDefault();
        

            fetch('http://localhost:3000/login_otp.js', { method: 'POST'}).then(() =>
            {
                history.push('/login_otp');
            });
        }
    
        return (
            <div className="wrapper">

    <div className="form">
        <h3 className="title">LOGIN</h3>
        
        <form onSubmit = { handleSubmit }>
                <div className="alert">
                </div>
            <div className="field">
          
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email ID"/>
                <label>Email ID</label>
            </div>
            <div className="field">
                <input type="password" value={password} onChange = {(e) => setPass(e.target.value)} name="password" placeholder="Password" id=""/>
                <label>Password</label>
            </div>
            <div className="signup-link">
            Don't have an account? <a href="./register">Sign up</a></div>
            <div class="field">
                <input type="submit" value="Login"/>
            </div>
        </form>
    </div>
</div>
    );
}

export default Login