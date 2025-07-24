import React from "react";
import Location from "/assets/Contact/Location.svg";
import Facebook from "/assets/Contact/Facebook.svg";
import Instagram from "/assets/Contact/Instagram.svg";
import Email from "/assets/Contact/Email.svg";
import Twitter from "/assets/Contact/Twitter.svg";
import Phone from "/assets/Contact/Phone.svg";

const Contact = () => {
  return (
    <div id="contact" className="w-full ">
      <div className="font-nunito   flex flex-col text-center justify-center items-center  space-y-[36px] px-[56px] pt-[63px] pb-[40px]  sm:pb-[40px] sm:pr-[80px]  sm:pt-[63px] lg:pl-[136px] lg:pr-[110px]  [@media(min-width:1130px)]:flex-row [@media(min-width:1130px)]:justify-between mb-[42px] [@media(min-width:1130px)]:mb-[18px]">
        <div className="flex flex-col text-center [@media(min-width:1130px)]:items-start [@media(min-width:1130px)]:text-left">
          <p className="text-primary  font-bold  text-[32px]  font-lora">
            Your<span className="font-normal">Car</span>
          </p>
          <div className="mt-[17px] leading-[26px]   text-[18px] font-light space-y-[17px] text-secondary ml-[8px] ">
            <p>
              We are known for luxurious and premium chaffeur services
              worldwide. We are simply the best you can find.
            </p>
            <p>
              we are dedicated o providing our customers with a first-class car
              buying, selling, and renting experience.
            </p>
          </div>
        </div>

        <div className="flex flex-col font-nunito [@media(min-width:1130px)]:pl-[60px]">
          <p className="text-primary font-semibold text-[24px] mb-[16px] m">
            News Letter
          </p>
          <p className="mt-[17px] leading-[26px]   text-[16px] font-light space-y-[17px] text-secondary mb-[42px] mx-10">
            Subscribe to our news letter for updates, news and exclusive offers
          </p>
          <div className="flex flex-col-reverse justify-center items-center  sm:flex-row   gap-[19px] sm:gap-[17px]">
            <input
              type="email"
              className=" placeholder:text-secondary p-3 py-[17px]  pl-[14px] w-[276px] border   border-primary "
              placeholder="Email"
            />
            <button className="rounded-sm bg-primary w-fit text-[18px] font-nunito font-bold text-white px-[28px] py-[16px]">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex flex-col text-[16px] items-center [@media(min-width:1130px)]:pl-[60px] w-[500px]  ">
          <div className="">
            <p className="text-primary font-lora text-[24px] font-semibold">
              Contact
            </p>
            <div className=" flex text-left space-x-[10px] space-y-[16px] items-center ">
              <img src={Location} className="" alt="" />
              <div className="">
                <p>2038 2nd Avenue,</p>
                <p>Las Vegas, United States</p>
              </div>
            </div>
            <div className=" flex text-left space-x-[10px] space-y-[16px] items-center">
              <img src={Phone} className="" alt="" />
              <div className="">
                <p>01444773421423</p>
                <p>01444773421424</p>
              </div>
            </div>
            <div className="  flex text-left space-x-[10px]  space-y-[16px]  items-end ">
              <img src={Email} className="" alt="" />
              <div className="">
                <p>info@YourCar.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center w-full justif-center text-secondary ">
        <div className="flex space-x-[24px]  ">
          <img src={Facebook} className="" alt="" />
          <img src={Twitter} className="" alt="" />
          <img src={Instagram} className="" alt="" />
        </div>
        <hr className="border-0 h-[2px]  w-[85%] mt-5 bg-primary" />
        <p className=" text-[16px] mt-5 mb-10">
          © Copyright 2023 · <span className="font-bold">YourCar</span> All
          rights reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Contact;
