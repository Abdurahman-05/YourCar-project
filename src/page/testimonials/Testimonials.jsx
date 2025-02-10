import React from "react";
import Car from "../../assets/comment/car4.svg";
import Star from "../../assets/comment/Star.png";
import Title from "../../component/Title";
import Testimonial from "./testimonial";
const Testimonials = () => {
  return (
    <div className="w-full py-24 font-bold text-white h-fit font-lora bg-secondary">
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
      
     <Testimonial/>
      
    </div>
  );
};

export default Testimonials;
