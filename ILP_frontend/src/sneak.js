import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './sneak.css';

const sneak = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 955,
                settings:{
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings:{
                    slidesToShow: 1
                }
            }
        ]
      };
    return (
        <div>
            <h1 style={{color: "white", textAlign:"center", marginTop:"20px"}}>Sneak Peek</h1>
           <Slider {...settings} className="sneakslide"> 
          <div className="sneak">
            <h3>1</h3>
          </div>
          <div className="sneak">
            <h3>1</h3>
          </div>
          <div className="sneak">
            <h3>1</h3>
          </div>
          <div className="sneak">
            <h3>1</h3>
          </div>
          <div className="sneak">
            <h3>1</h3>
          </div>
          <div className="sneak">
            <h3>1</h3>
          </div>
          
        </Slider>
        </div>
    )
}

export default sneak
