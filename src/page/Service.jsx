import React from "react";
import Serv from "../assets/Product/CTA BG.png";
import Star from "../assets/Product/Star.svg";
import Hand from "../assets/Product/Hand.svg";
import Diamond from "../assets/Product/Diamond.svg";
import OneService from "./OneService";


const Service = () => {
  return (
    <div
      id="service"
      className="relative w-full bg-cover bg-center flex bg-[#DFDFDF] flex-col pt-[80px]   md:space-y-0 pb-20"
      style={{
        backgroundImage: `url(${Serv})`,
      }}
    >
     
      <h1 className="font-bold font-lora text-center text-[64px]   sm:text-[84px] md:text-[124px]  text-[#ebebeb] ">
        SERVICE
      </h1>
        <div className="relative font-lora">
          <h1 className="absolute  text-secondary font-bold font-lora text-[34px] top-[-45px] left-[50%] sm:top-[-85px] sm:text-[64px]  md:top-[-95px]  transform -translate-x-1/2">
            service
          </h1>
        </div>

      <div className="flex  flex-col-reverse justify-center items-center  px-[28px] sm:px-[10%] md:space-y-0  lg:flex-row lg:space-x-[80px] pt-[60px] ">
        <OneService
          title="Car sales"
          description=" At YourCar, we offer a wide selection of luxury vehicles for sale. Whether you're in the market for a sleek sports car or a spacious SUV, we have the perfect vehicle to fit your needs."
          image={Star}
        />
        <OneService
          title="Car rental"
          description="If you're in need of a luxury car rental, look no further than YourCar. Our fleet of high-end vehicles is regularly maintained and serviced to ensure that you have a safe and comfortable driving experience."
          image={Hand}
        />
        <OneService
          title="Car selling"
          description="At YourCar, we make it easy to sell your car. Simply bring your vehicle in for an appraisal, and we'll handle the rest. We offer fair prices and a hassle-free selling process, so you can get  your vehicle with minimal effort."
          image={Diamond}
        />
      </div>
    </div>
  );
};

export default Service;
