import React from "react";
import Car from "../assets/hero/brownCar.svg";

const About = () => {
  return (
    
      <div id="about" className=" w-full pl-[78px] bg-white mt-[58px] flex space-x-5">
        <div className="w-[700px]  ">
          <div className="relative    ">
            <div className="text-center  md:text-left text-[#EBEBEB] text-[64px] md:text-[120px] font-bold font-lora opacity-75">
              ABOUT US
            </div>
            <p
              className="absolute bottom-[-5px]  left-[41%] md:left-[20px] text-[32px]
       
    md:text-[56px] text-primary font-bold font-lora  "
            >
              About
            </p>
          </div>
          <div className=" md:mt-14  md:text-[20px] text-left text-[15px] flex-col space-y-5  text-[#232730]">
            <p>
              YourCar is a luxury car dealership that offers a personalized and
              first-class experience to its clients. Our team of experienced
              professionals is dedicated to providing exceptional service and
              finding the perfect vehicle to match our clients' unique
              preferences and requirements. We have an extensive selection of
              high-end vehicles, ranging from sports cars to SUVs, all of which
              are maintained to the highest standards of quality and safety.
            </p>

            <p>
              At YourCar, we are committed to creating a stress-free and
              enjoyable car buying experience. We understand that purchasing a
              luxury car can be a significant investment, which is why we offer
              flexible financing options to make the process more manageable.
              Our team is available to answer any questions and provide guidance
              throughout the entire buying process. We take pride in our
              outstanding customer service and attention to detail, and we are
              confident that our clients will be satisfied with their experience
              at YourCar.
            </p>
          </div>
        </div>

       
          <div className="hidden md:flex ">
            <img src={Car} cl className="" alt="" />
        </div>
      </div>
   
  );
};

export default About;
