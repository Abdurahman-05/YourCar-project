import { useState } from "react";
import CartMob from "/assets/nav/Cart.png";
import del from "/assets/nav/Delet.svg";
import CartDis from "/assets/nav/Group.png";
import ActiveCart from "/assets/nav/ActiveCart.png";
import { useSelector, useDispatch } from "react-redux";
import classes from "./nav.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  incrementAmount,
  decrimentAmount,
  removeAmount,
} from "../features/slice";

const nav = () => {
  const Menulinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Service", link: "#service" },
    { name: "Cars", link: "#cars" },
    { name: "Contact us", link: "#contact" },
  ];

  const dispatch = useDispatch();
  const products = useSelector((store) => store.Cars.products);
  const total = useSelector((store) => store.Cars.total);

  const [ActiveLink, setActiveLink] = useState("Home");
  const [Cart, setCart] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const scrollHandler = () => {
    setIsOpen((prevState) => !prevState);
    document.querySelector("html").style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <div className="relative">
      <div className={classes.container}>
        <div className={classes.companyLogo}>
          Your<span className="font-normal">Car</span>
        </div>

        <div className={classes.linkContainer}>
          <ul className={classes.link}>
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
                className=" h-[29px] md:hidden"
                src={Cart ? ActiveCart : CartMob}
                alt=""
              />
              <img
                className=" h-[29px] hidden md:block "
                src={Cart ? ActiveCart : CartDis}
                alt=""
              />
              <div className="h-[27px] w-[23px] flex justify-center items-center text-white rounded-md font-lora bg-secondary absolute top-[-12px] right-[0px] text-[17px]">
                {total}
              </div>
            </div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer md:hidden "
            >
              {!isOpen ? (
                <div className="">
                  <FaBars size={30} color="#12273d" />
                </div>
              ) : (
                <div className="ml-12 w-30" h-16>
                  {" "}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={` ${classes.menuCommon}  ${
          isOpen ? classes.menuOpen : classes.menuClose
        }`}
      >
        {isOpen && (
          <div className="absolute top-[10px] right-[-256px] flex w-full p-4 jstify-end">
            <FaTimes
              size={45}
              color="#741906"
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
        )}
        {Menulinks.map((menu, index) => (
          <a
            href={menu.link}
            className={`text-2xl font-lora py-[20px] px-8 ${
              ActiveLink == menu.name ? "bg-primary " : ""
            }`}
            onClick={() => setActiveLink(menu.name)}
            key={index}
          >
            {menu.name}
          </a>
        ))}
      </div>
      <div
        className={`z-20 w-[90vw] xs:w-[400px] sm:w-[450px] flex flex-col pt-32 text-primary bg-secondary h-screen max-sm:mt-[5.5rem] fixed right-0 top-[0px] transform transition-transform ${
          Cart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute top-[10px] right-[-250px] xs:right-[-300px] flex w-full p-4 justify-end">
          <FaTimes
            size={40}
            color="#741906"
            className="cursor-pointer hover:opacity-70 transition-opacity"
            onClick={() => setCart(false)}
          />
        </div>
        <div className="flex flex-col space-y-4 overflow-auto px-[24px] pb-52">
          {products.map((item, index) => {
            const name = item.name;
            return (
              <div
                className={`w-full bg-white h-fit  px-[24px] py-6 
              ${item.amount > 0 ? "static" : "hidden"} `}
                key={index}
              >
                <div className="flex justify-between ">
                  <div className="space-y-[6px]">
                    <div className="text-[16px] font-bold  ">{item.name}</div>
                    <div className="text-secondary ">{item.class}</div>
                  </div>
                  <div className="w-[138px] h-[80px]">
                    <img src={item.image} alt="" />
                  </div>
                </div>

                <div className="flex items-center">
                  <button
                    onClick={() => {
                      dispatch(decrimentAmount({ name }));
                    }}
                    className="h-[35px] w-[35px] bg-primary text-white rounded-tl-[4px] rounded-bl-[4px]"
                  >
                    -
                  </button>
                  <div className="bg-white h-[35px] w-[35px] flex justify-center items-center text-[24px] text-secondary">
                    {item.amount}
                  </div>
                  <button
                    onClick={() => {
                      dispatch(incrementAmount({ name }));
                    }}
                    className="h-[35px] w-[35px] bg-primary rounded-tr-[4px] rounded-br-[4px] text-white"
                  >
                    +
                  </button>
                  <div
                    onClick={() => {
                      dispatch(removeAmount({ name }));
                    }}
                    className="pl-4"
                  >
                    <img className="h-[35px] w-[35px]" src={del} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default nav;
