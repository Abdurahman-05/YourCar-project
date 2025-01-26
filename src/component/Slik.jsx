import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Slik() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="w-full bg-blue-500 h-screen">
      <Slider {...settings}>
      <OneCar
            image={Car1}
            design="SUV"
            model="Mercedes M class"
            discription="The Range Rover Sport is a versatile SUV that's perfect for both on and off-road adventures. With its powerful engine and advanced four-wheel drive system, this vehicle can handle any terrain with ease. It's also incredibly spacious, with room for up to seven passengers and plenty of cargo space."
            numberOfSeats="4 Seats"
            numberOfLuggege="2 Luggage"
          />
      </Slider>
    </div>
  );
}

export default Slik;
