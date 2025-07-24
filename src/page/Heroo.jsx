import { React, useState } from "react";
import Background from "../assets/nav/Background.png";
import Arrow from "../assets/nav/Arrow.png";
import Nav from "../component/nav";

const Menulinks = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Service", link: "#service" },
  { name: "Cars", link: "#cars" },
  { name: "Contact us", link: "#contact" },
];

const Hero = () => {
  const [ActiveLink, setActiveLink] = useState("Home");
  const [Cart, setCart] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-cover w-full h-fit md:h-[900px]  bg-center pb-10 "
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <Nav />

      <div className="items-end pt-[95px]  justify-center w-full text-white font-lora sm:pr-[78px] ">
        <div className="flex flex-col items-center sm:items-end">
          <div className="font-bold text-[34px] text-center whitespace-nowrap sm:text-end sm:text-[45px] lg:text-[85px] mt-[60px] sm:mt-[20px]  md:text-[64px] sm:px-0 flex ">
            Find the perfect car
            <br /> for you at YourCar.
          </div>

          <div
            className=" max-w-[450px] text-center text-[20px]  bg-[#0E0C0B] bg-opacity-[46%] sm:
  font-bold leading-[40.96px] pr-[12px] sm:bg-transparent sm:text-end sm:text-[32px] mt-[110px] sm:mt-[45px] md:mt-[22px] sm-text-end"
          >
            <p className="ml-auto">
              We offer a wide range of cars that cater to your needs and budget.
              Visit us today and drive away with your dream car!
            </p>
          </div>
          <div className="flex items-center justify-center mt-[210px] mb-10 sm:mt-[100px]">
            <button className=" w-[195px] h-[56px] rounded-xl flex space-x-[10px] border-2 justify-center items-center p-[12px]  ">
              <p className="">Discover</p>
              <img src={Arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
