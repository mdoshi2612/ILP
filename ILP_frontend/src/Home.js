import React from 'react'
import './Home.css';
import NavbarHome from './NavbarHome';
import { NavLink } from 'react-router-dom';
import FAQ from './FAQ';
import Alumni from './Alumni';
import Team from './Team';
import Register from './Register';
import sneak from './sneak';

const Home = () => {
    return (
        <div>
            <NavbarHome />

            <div className="hero-text">
                <h1><span className="red-let">I</span>ndustrial</h1>
                <h1><span className="red-let">L</span>earning</h1>
                <h1><span className="red-let">P</span>rogram</h1>
            </div>
            <div style={{marginTop: "3%", marginBottom: "4%"}}>
            <NavLink to="/Register" className={"nav-link"} activeClassName="active" style={{color: "#e85a50", borderColor: "#e85a50", fontSize: "2em"}}>Register</NavLink>
            </div>
            <div id="faq">
                <FAQ />
            </div>
            <div id="Team">
                <Team />
            </div>
            {/* <div className="sneak">
                <sneak />
            </div> */}
            <div className="Footer" id="contact">
                <div className="contact-cards">
                    <h1>Priyam Vijayvargia</h1>
                    <p>Core Team Member, Hostel and Department Affairs</p>
                    <h3>07412011226</h3>
                    <h3>priyam@sarc-iitb.org</h3>
                </div>
                <div className="contact-cards">
                    <h1>Vivitsa Jain</h1>
                    <p>Core Team Member, Hostel and Department Affairs</p>
                    <h3>09967873350</h3>
                    <h3> vivitsa@sarc-iitb.org</h3>
                </div>
            </div>
        </div>
        
    )
}

export default Home
