import { React, useState } from "react";
import Background from "/assets/nav/Background.png";
import Arrow from "/assets/nav/Arrow.png";
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
      className="bg-cover w-full min-h-screen bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <Nav />

      <div className="items-end pt-[95px] justify-center w-full text-white font-lora px-4 sm:pr-[78px]">
        <div className="flex flex-col items-center sm:items-end">
          <div className="font-bold text-[28px] xs:text-[34px] text-center sm:text-end sm:text-[45px] lg:text-[85px] mt-[60px] sm:mt-[20px] md:text-[64px] sm:px-0">
            Find the perfect car
            <br /> for you at YourCar.
          </div>

          <div className="max-w-[450px] text-center text-[16px] xs:text-[18px] sm:text-[20px] md:text-[32px] bg-[#0E0C0B] bg-opacity-[46%] sm:bg-transparent sm:text-end mt-[60px] sm:mt-[45px] md:mt-[22px] font-bold leading-[1.5] px-4 sm:px-0">
            <p className="sm:ml-auto">
              We offer a wide range of cars that cater to your needs and budget.
              Visit us today and drive away with your dream car!
            </p>
          </div>
          <div className="flex items-center justify-center mt-[80px] mb-10 sm:mt-[100px]">
            <button className="w-[160px] xs:w-[195px] h-[48px] xs:h-[56px] rounded-xl flex space-x-[10px] border-2 justify-center items-center p-[12px] hover:bg-white hover:text-primary transition-colors duration-300">
              <p className="text-sm xs:text-base">Discover</p>
              <img src={Arrow} alt="" className="w-4 h-4 xs:w-5 xs:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
