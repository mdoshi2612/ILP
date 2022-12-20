import React from 'react';
import Slider from "react-slick";
import sliderimg from "./components/images/slider.jpg";

const carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "10px"
    }

    return (
        <div>
            <Slider {...settings} className="sneakslide"> 
          <div className="sneak">
            <img src={sliderimg}></img>
          </div>
          <div className="sneak">
            <img src={sliderimg}></img>
          </div>
          <div className="sneak">
            <img src={sliderimg}></img>
          </div>
          <div className="sneak">
            <img src={sliderimg}></img>
          </div>
          <div className="sneak">
            <img src={sliderimg}></img>
          </div>
        </Slider>
        </div>
    )
}

export default carousel
