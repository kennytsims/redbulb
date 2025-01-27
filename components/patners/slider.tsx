import React from "react";
import Slider from "react-slick";
import Partners from "./partners";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <Partners />
      </div>
    </Slider>
  );
}
