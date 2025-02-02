//
import React from "react";
import OneCar from "../component/OneCar.jsx";
import Car1 from "../assets/Cars/car1.png";
import Slider from "react-slick";
import carsData from './data.json'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cars = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div
      id="cars"
      className="w-full h-fit  bg-gray-700 flex flex-col  items-center pb-16"
    >
      <div className="font-lora relative flex justify-center">
        <h1 className="text-[128px] font-bold text-[#EBEBEB]">CARS</h1>
        <p className="font-bold text-[32px] text-primary absolute bottom-6 left-[48%]">
          Cars
        </p>
      </div>




      <section className="w-2/3 mt-[55px]">
        <div className="slider-container ">
        <Slider {...settings}>
        {
          carsData.cars.map((car, index) => (
           <div className="">
           <div className=" ">
            <img src={car.image} className="w-[310px] h-[110px] object-cover rounded-lg mb-4" alt="" /> 
            </div>
           <div>{car.name}</div>
           <div>{car.class}</div>
           <div>{car.description}</div>
           <div>{car.seats}</div>
           <div>{car.liggage}</div>
           </div>

          ))}
        
        </Slider>
        </div>
      </section>
    </div>
  );
};

export default Cars;
