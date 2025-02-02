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
       <div className="flex flex-col  relative ">
        <div className={`text-[64px] md:text-[124px] font-lora text-center    text-[#EBEBEB] font-bold`}>
          SERVICE
        </div>
        <p className={`md:text-[48px] text-24px font-lora text-secondary font-semibold absolute bottom-[12px] left-[44%]`}>
          service
        </p>
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
