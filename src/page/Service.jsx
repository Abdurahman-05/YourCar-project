import React from "react";
import Serv from "../assets/Product/CTA BG.png";
import Star from "../assets/Product/Star.svg";
import Hand from "../assets/Product/Hand.svg";
import Diamond from "../assets/Product/Diamond.svg";
import OneService from "./OneService";
import Title from "../component/Title";

const Service = () => {
  return (
    <div
      id="service"
      className="relative w-full bg-cover bg-center flex flex-col space-y-16  md:space-y-0 pb-20"
      style={{
        backgroundImage: `url(${Serv})`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#DFDFDF] -z-20">

      <Title mainTitle="Service" subTitle="Service" color1 = "text-[#EBEBEB]" />
        </div>

      <div className="flex  flex-col space-y-20 px-[18px] md:flex-row space-x-[76px]   md:space-y-0 pt-[86px] mx-10">
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
