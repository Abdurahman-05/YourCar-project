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
  // const products = useSelector((state) => state.products);
  const [isOpen, setIsOpen] = useState(false);

  // const totalItems = products.reduce((acc, product) => acc + product.count, 0);

  return (
    <div
      className="bg-cover w-full h-fit md:h-[900px]  bg-center pb-10 "
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <Nav />

      <div className=" text-white font-lora w-full  items-end justify-center [{@midia(min-width)}]:justify-end flex px-[85px]   pt-[35px]">
        <div className="w-[650px] flex flex-wrap items-end flex-col  space-y-[32px]  ">
          <div className=" text-center   text-[36px] sm:text-[64px] text-bold font-bold sm:text-end">
            Find the perfect car for you at YourCar.
          </div>

          <div className="w-[400px] text-end text-[20px] opacity-[46%]   bg-[#0E0C0B]
  font-bold leading-[40.96px] pr-[12px] sm:bg-transparent sm:text-[32px] sm:opacity-100">
            We offer a wide range of cars that cater to your needs and budget.
            Visit us today and drive away with your dream car!
          </div>
          <div className="flex items-center justify-center">
            <button className=" w-[195px] rounded-xl flex space-x-[10px] border-2 justify-center items-center p-[12px]  ">
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
