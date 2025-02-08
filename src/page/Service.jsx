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
      className="relative w-full bg-cover bg-center flex bg-[#DFDFDF] flex-col space-y-16  md:space-y-0 pb-20"
      style={{
        backgroundImage: `url(${Serv})`,
      }}
    >
      {/* <Title mainTitle="Service" subTitle="Service" color1 = "text-[#EBEBEB]" />
       */}
      <h1 className="font-bold font-lora text-center text-[64px]  sm:text-[84px] md:text-[124px]  sm:text-left text-[#ebebeb] ">
        ABOUT US
      </h1>
      <div className="grid lg:grid-cols-2 gap-[45px] ">
        <div className="relative font-lora">
          <h1 className="absolute  text-primary font-bold font-lora text-[34px] top-[-48px] left-[165px] sm:top-[-69px] sm:left-[-6px] sm:text-[64px] md:left-[-5px] md:top-[-86px] ">
            About
          </h1>
        </div>
      </div>

      <div className="flex  flex-col justify-center items-center space-y-[35px] md:space-y-0 px-[18px] md:flex-row space-x-[70px]    md:pt-[86px] mx-10">
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
