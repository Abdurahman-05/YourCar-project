import React from "react";
import { useState } from "react";
import hum from "../assets/nav/humberger.png";
import CartMob from "../assets/nav/cart.svg";
import Background from "../assets/nav/Background.png";
import CartDis from "../assets/nav/Group.png";
import ActiveCart from "../assets/nav/ActiveCart.png";
import { useSelector } from "react-redux";

const nav = () => {
  const Menulinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Service", link: "#service" },
    { name: "Cars", link: "#cars" },
    { name: "Contact us", link: "#contact" },
  ];

  const amount = useSelector((store) => store.Cars.amount)

  const [ActiveLink, setActiveLink] = useState("Home");
  const [Cart, setCart] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" h-[5.5rem] bg-white sm:bg-transparent  md:static  w-full px-5  sm:px-[78px] md:px-14 bg-transparent flex justify-between items-center ">
      <div className="text-[34px] font-bold tracking-wide font-lora text-secondary  sm:text-[45px] sm:text-white">
        Your<span className="font-normal">Car</span>
      </div>

      <div className="md:flex space-x-8 font-lora text-[24px] md:items-center">
        <ul className="hidden space-x-10 text-xl font-semibold text-white md:flex ">
          {Menulinks.map((items, index) => (
            <div className="" key={index}>
              <li>
                <a
                  href={items.link}
                  className={`p-[7px]  rounded-[5px] ${
                    ActiveLink == items.name ? "bg-primary p-[10px]" : "p-0"
                  }`}
                  onClick={() => setActiveLink(items.name)}
                >
                  {items.name}
                </a>
              </li>
            </div>
          ))}
        </ul>

        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="relative p-2 " onClick={() => setCart(!Cart)}>
            <img
              className="w-[34px] h-[29px] md:hidden"
              src={Cart ? ActiveCart : CartMob}
              alt=""
            />
            <img
              className="w-[34px] h-[29px] hidden md:block "
              src={Cart ? ActiveCart : CartDis}
              alt=""
            />
            <div className="h-[27px] w-[23px] flex justify-center items-center text-white rounded-md font-lora bg-secondary absolute top-[-12px] right-[0px] text-[17px]">{amount}</div>
            {/* {totalItems > 0 && (
                    <div className="absolute font-lora  bg-secondary md:bg-[#f8d7a4] rounded text-xs md:text-secondary inline-flex justify-center items-center text-white right-0 top-0  w-[21.5px] h-[21.5px]">
                      {totalItems}
                    </div>
                  )} */}
          </div>
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="cursor-pointer md:hidden"
          >
            <img src={hum} className="text-white w-[24px] h-[16px]" alt="" />
          </div>
        </div>
      </div>
      <div
        className={` z-50 w-1/2   lg:flex-row lg:static md:hidden  flex flex-col pt-60 space-y-5 text-white items-center bg-secondary opacity-95 h-screen fixed right-0 top-[80px]  transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } `}
      >
        {Menulinks.map((menu, index) => (
          <a href={menu.link} key={index}>
            {menu.name}
          </a>
        ))}
      </div>
      <div
        className={` z-50 w-[500px]   lg:flex-row  md:top-0 flex flex-col pt-10 space-y-5 text-white  bg-secondary opacity-95 h-screen fixed right-0 top-[80px]  transform transition-transform ${
          Cart ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <div className="w-[80%] mx-auto h-52 bg-white "></div>
        <div className="w-[80%] mx-auto h-52 bg-white "></div>
        <div className="w-[80%] mx-auto h-52 bg-white "></div>
        <div className="w-[80%] mx-auto h-52 bg-white "></div>
      </div>
    </div>
  );
};

export default nav;
