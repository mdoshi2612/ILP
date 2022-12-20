import logo from './logo.svg';
import { Route, Router, Switch, BrowserRouter,Link, NavLink, Redirect } from 'react-router-dom';
import React, { Component } from "react"
import './App.css';
import updateData from './Projectcard';
import './Projectdisp.css';
import AboutUs from './AboutUs';
import Home from './Home';
import FAQ from './FAQ';
import Alumni from './Alumni';
import ContactUs from './Team';
import Register from './Register';
import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Projectcard from './Projectcard';
// const Projectcards = ({project}) => {
//     const [pref0, setPref0] = useState(null);
//     const [pref1, setPref1] = useState(null);
//     const [pref2, setPref2] = useState(null);
//     const [pref3, setPref3] = useState(null);
//     const [pref4, setPref4] = useState(null);
//     const [pref5, setPref5] = useState(null);
//     const updateData = (value, project) => {
//         if (value == 0) { setPref0(project); }
//         if (value == 1) { setPref1(project); }
//         if (value == 2) { setPref2(project); }
//         if (value == 3) { setPref3(project); }
//         if (value == 4) { setPref4(project); }
//         if (value == 5) { setPref5(project); }
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         fetch('http://127.0.0.1:8000/api/preference/',{
//             method: 'POST',
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify(pref0, pref1, pref2, pref3, pref4, pref5)
//         }
//         )
//     }
// }
// const [projects, setProjects] = useState([]);
//      useEffect(()=>{
//           fetch("http://127.0.0.1:8000/api/projects/")
//              .then(res => res.json())
//              .then((res)=>{
//                  setProjects(res)
//              })
//       },[projects])
const ProjectDisp = () => {
    return (
        <div>
            <Navbar />
            <div id="main-heading-projects"><h1>Projects</h1></div>
            <Projectcard></Projectcard>
            </div>
                
        
    )
}

export default ProjectDisp