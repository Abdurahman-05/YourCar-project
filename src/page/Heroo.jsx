import React from "react";
import { useState } from "react";
import hum from "../assets/nav/humberger.png";
import CartMob from "../assets/nav/cart.png";
import Background from "../assets/nav/Background.png";
import CartDis from "../assets/nav/Group.png";
import ActiveCart from "../assets/nav/ActiveCart.png";
import Arrow from "../assets/nav/arrow.png";
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
            Find the perfect car<br/> for you at YourCar.
          </div>
          
          <div className=" max-w-[450px] text-center text-[20px]  bg-[#0E0C0B] bg-opacity-[46%] sm:
  font-bold leading-[40.96px] pr-[12px] sm:bg-transparent sm:text-end sm:text-[32px] mt-[110px] sm:mt-[45px] md:mt-[22px] sm-text-end">
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






// {/* // <div className="flex flex-col items-center justify-center h-screen md:items-end">
// //   <p>This is a paragraph.</p>
// //   <div>This is a div.</div>
// //   <button>This is a button</button>
//    <div /> */}

{
  /* <div className="flex flex-col items-center justify-center w-full mt-20 space-y-12 font-lora md:items-end md:mt-10 md:space-y-4">
<div className="text-[38px]  md:text-[54px] font-bold md:w-[600px] md:leading-none  text-center  mx-12 md:mx-4  leading-tight   text-white ">
  Find the perfect car for you at YourCar.
</div>
<div className=" md:bg-transparent bg-black md:w-[400px] mx-6 bg-opacity-30 p-6 md:mx-4 font-normal  inline-flex  justify-center items-center ">
  <p className="text-2xl text-center text-white ">
    We offer a wide range of cars that cater to your needs and budget.
    Visit us today and drive away with your dream car!
  </p>
</div>
<div className="md:w-[600px] md:inline-flex md:self-end justify-center items-center">
  <button className="flex items-center p-2 space-x-4 border-2 rounded-md ">
    <p className="text-white">Discover</p>
    <img src={Arrow} alt="" />
  </button>
</div>
</div> */
}
