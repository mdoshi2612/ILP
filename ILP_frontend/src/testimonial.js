import React from 'react';
import './testimonial.css';
import Zoom from 'react-reveal/Zoom';

const testimonial = () => {
    return (
        <div>
            <h1 style={{color: "white", textAlign: "center", marginTop: "20px"}}>Testimonial</h1>
            <div className="testim">
                <Zoom><div className="longintest"></div></Zoom>
                <Zoom><div className="intest"></div></Zoom>
                <Zoom><div className="longintest"></div></Zoom>
                <Zoom><div className="intest"></div></Zoom>

            </div>
        </div>
    )
}

export default testimonial
