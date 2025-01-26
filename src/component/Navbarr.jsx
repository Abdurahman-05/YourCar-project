import React from "react";
import { useState } from "react";
import hum from "../assets/nav/humberger.png";
import CartMob from "../assets/nav/cart.png";
import Background from "../assets/nav/Background.png";
import CartDis from "../assets/nav/Group.png";
import ActiveCart from "../assets/nav/ActiveCart.png";
import { setArgs } from "@craco/craco/dist/lib/args";
import Arrow from "../assets/nav/arrow.png";

const Navbarr = () => {
  return (
    <div
      className="bg-cover w-full h-screen md:h-screen bg-center pb-10"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
    
    <div className="flex flex-col w-full font-lora  justify-center items-center md:items-end  mt-20 md:mt-10   space-y-12 md:space-y-4">
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
          <button className="flex  space-x-4 items-center border-2  p-2 rounded-md ">
            <p className="text-white">Discover</p>
            <img src={Arrow} alt="" />
          </button>
        </div>
      </div>


    </div>
  )
}

export default Navbarr