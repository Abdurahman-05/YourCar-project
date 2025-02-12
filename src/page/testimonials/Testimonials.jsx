import React from "react";
import Car from "../../assets/comment/car4.svg";
import Star from "../../assets/comment/Star.png";
import Title from "../../component/Title";
import Testimonial from "./testimonial";
import Slider from "react-slick";
import './style.css'


const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };

  return (
    <div className="w-full pt-24 font-bold text-white pb-44 h-fit font-lora bg-secondary">
      <div className="flex flex-col  mb-[55px]">
        <h1 className="font-bold font-lora text-center text-[40px]   sm:text-[72px] md:text-[90px]  text-[#EBEBEB] opacity-10 lg:text-[124px]">
          TESTIMONIALS
        </h1>
        <div className="relative font-lora">
          <h1 className="absolute  text-white font-bold font-lora text-[32px] top-[-38px] left-[50%] sm:top-[-55px] sm:text-[42px]  md:top-[-70px] md:text-[50px]  lg:text-[58px] lg:top-[-85px]  transform -translate-x-1/2">
            Testimonials
          </h1>
        </div>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
