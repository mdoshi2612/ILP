import React,{Component} from 'react';
// import axios from 'axios'; 
import './Register.css';
import './register1.css';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import Projectcard from './Projectcard';

const Register = () => {
//     const [projects, setProjects] = useState([]);
//      useEffect(()=>{
//          fetch("http://127.0.0.1:8000/api/projects/")
//             .then(res => res.json())
//             .then((res)=>{
//                 setProjects(res)
//             })
//      },[projects])
const [email, setEmail] = useState([]);
    const [password, setPass] = useState([]);

    const login = (e) => {
        let det = {email, password}
        fetch('http://127.0.0.1:8000/api/register/',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(det)
        })
        .then((data) => {console.log(data)})
        console.log(det)
    }
    return (
        
        <div>
            <Navbar />
            <h1 className="page-title">Register</h1>
            <div className="form">
            <form action="personal_info_add" method="post">
            <div className="pinfo align-items-center">
            <div className="pinfo-constituents">
            <label class="labelfield">Full Name: </label><input type="text" placeholder="Full Name" name="fullname"></input></div><br></br>
            <div className="pinfo-constituents">
            <label class="labelfield">Email: </label><input type="email" placeholder="Email Id" name="email"></input></div><br></br>
            <div className="pinfo-constituents">
            <label class="labelfield">Password: </label><input placeholder="Password" name="password" type="password"></input></div><br></br>
            <div className="pinfo-constituents">
            <label class="labelfield">Contact No.: </label><input type="text" placeholder="Phone No."></input></div><br></br>
            <div className="pinfo-constituents">
                <label class="labelfield">Department: </label>
                <select id="t01" name="dept" placeholder="Department">
                    <option value=""></option>
                    <option value="2nd year UG">2nd year UG</option>
                    <option value="3rd year UG">3rd year UG</option>
                    <option value="1st year MSc">1st year MSc</option>
                    <option value="1st year MTech">1st year MTech</option>
                    <option value="1st year PhD">1st year PhD</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <br></br>
            <div className="pinfo-constituents">
                <label class="labelfield">Year of Study: </label>
                <select id="t01" name="yos" placeholder="Year of Study">
                    <option value=""></option>
                    <option value="2nd year UG">2nd year UG</option>
                    <option value="3rd year UG">3rd year UG</option>
                    <option value="1st year MSc">1st year MSc</option>
                    <option value="1st year MTech">1st year MTech</option>
                    <option value="1st year PhD">1st year PhD</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <br></br>
            <div className="pinfo-constituents">
            <label class="labelfield">Resume: </label><input id="t03" type="file" name="resume" placeholder="Resume"></input></div><br></br><br></br>
            </div>
            <center>
            <button className="submit" id="t02">Choose Projects</button><br></br><br></br>
            </center>
            
    </form>
           
            {/* <Projectcard project={projects} /> */}
        </div>
        </div> 
    )
}
                {/* <input placeholder="Email" name="email" value={email} type="text" onChange={e => setEmail(e.target.value)}/><br></br>
                <input placeholder="Password" name="password" value={password} onChange={e => setPass(e.target.value)} type="password"></input><br></br>
                <button className="submit" onClick={login}>Sign Up</button>
            </div> */}
            
        // </div>


export default Register
