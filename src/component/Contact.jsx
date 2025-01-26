import React from "react";
import Location from "../assets/Contact/Location.png";
import Facebook from "../assets/Contact/Facebook.png";
import Instagram from "../assets/Contact/Instagram.png";
import Email from "../assets/Contact/Email.png";
import Twitter from "../assets/Contact/Twitter.png";
import Phone from "../assets/Contact/Phone.png";

const Contact = () => {
  return (
    <div id="contact" className="w-full    flex flex-col  justify-center pt-10 space-y-4  ">
      <div className="w-full px-16 flex flex-col md:flex-row text-center space-y-6 font-nunito text-secondary text-[24px]">
        <div className="flex flex-col text-[16px]  space-y-5 md:w-1/3">
          <p className="text-primary font-bold text-[24px] font-lora">
            Your<span className="font-normal">Car</span>
          </p>
          <p >
            We are known for luxurious and premium chaffeur services worldwide.
            We are simply the best you can find.
          </p>
          <p>
            we are dedicated o providing our customers with a first-class car
            buying, selling, and renting experience.
          </p>
        </div>

        <div className=" text-center text-[16px]  flex flex-col md:w-1/3 items-center space-y-4 md:justify-between ">
          <p className="text-primary text-[20px]">News Letter</p>
          <p className="text-secondary   ">
            Subscribe to our news letter for updates, news and exclusive offer
          </p>
          <input
            type="email"
            className="bg-gray-300 placeholder:text-[#12273D] p-3 placeholder:opacity-45 h-10"
            placeholder="Email"
          />
          <button className="rounded-sm bg-primary w-fit text-[20px] font-nunito text-white px-6 py-2">
            Subscribe
          </button>
        </div>
        <div className="flex flex-col text-[16px] md:w-1/3 items-center  md:items-start ml-10 ">
          <div className="">
            <p className="text-primary font-lora font-semibold">Contact</p>

            <div className=" flex items-center text-left space-x-6 space-y-5">
              <img src={Location} className=" object-cover" alt="" />
              <div className=" ">
                <p>2038 2nd Avenue,</p>
                <p>Las Vegas, United States</p>
              </div>
            </div>
            <div className=" flex items-center text-left justify-start space-x-6 space-y-5">
              <img src={Phone} className="object-cover " alt="" />
              <div className=" ">
                <p>01444773421423</p>
                <p>01444773421424</p>
              </div>
            </div>
            <div className=" flex items-center space-x-5 mt-5 text-left">
              <img src={Email} className="object-cover" alt="" />
              <div className=" ">
                <p>info@YourCar.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justif-center items-center text-secondary ">
        <div className="flex space-x-16 mt-8">
          <img src={Facebook} className="" alt="" />
          <img src={Twitter} className="" alt="" />
          <img src={Instagram} className="" alt="" />
        </div>
        <hr className="border-0 h-1 w-[85%] mt-5 bg-primary" />
        <p className=" text-[16px] mt-5 mb-10">
          © Copyright 2023 · <span className="font-bold">YourCar</span> All
          rights reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Contact;
