import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import OneCar from "../component/OneCar.jsx";
import Car1 from "/assets/Cars/Car1.png";

const CarSlick = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 838,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      <Slider {...settings}>
        <OneCar
          image={Car1}
          design="SUV"
          model="Mercedes M class"
          discription="The Range Rover Sport is a versatile SUV that's perfect for both on and off-road adventures. With its powerful engine and advanced four-wheel drive system, this vehicle can handle any terrain with ease. It's also incredibly spacious, with room for up to seven passengers and plenty of cargo space."
          numberOfSeats="4 Seats"
          numberOfLuggege="2 Luggage"
        />

        <OneCar
          image={Car1}
          design="SUV"
          model="Mercedes M class"
          discription="The Range Rover Sport is a versatile SUV that's perfect for both on and off-road adventures. With its powerful engine and advanced four-wheel drive system, this vehicle can handle any terrain with ease. It's also incredibly spacious, with room for up to seven passengers and plenty of cargo space."
          numberOfSeats="4 Seats"
          numberOfLuggege="2 Luggage"
        />
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
};

export default CarSlick;
