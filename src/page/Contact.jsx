import React from "react";
import Location from "/assets/Contact/Location.svg";
import Facebook from "/assets/Contact/Facebook.svg";
import Instagram from "/assets/Contact/Instagram.svg";
import Email from "/assets/Contact/Email.svg";
import Twitter from "/assets/Contact/Twitter.svg";
import Phone from "/assets/Contact/Phone.svg";

const Contact = () => {
  return (
    <div id="contact" className="w-full">
      <div className="font-nunito flex flex-col text-center justify-center items-center space-y-[24px] xs:space-y-[36px] px-4 xs:px-[56px] pt-[40px] xs:pt-[63px] pb-[30px] xs:pb-[40px] sm:pr-[80px] sm:pt-[63px] lg:pl-[136px] lg:pr-[110px] lg:flex-row lg:justify-between lg:space-y-0 mb-[30px] xs:mb-[42px] lg:mb-[18px]">
        <div className="flex flex-col text-center lg:items-start lg:text-left">
          <p className="text-primary font-bold text-[24px] xs:text-[28px] sm:text-[32px] font-lora">
            Your<span className="font-normal">Car</span>
          </p>
          <div className="mt-[12px] xs:mt-[17px] leading-[1.4] text-[14px] xs:text-[16px] sm:text-[18px] font-light space-y-[12px] xs:space-y-[17px] text-secondary ml-[4px] xs:ml-[8px]">
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

        <div className="flex flex-col font-nunito lg:pl-[60px]">
          <p className="text-primary font-semibold text-[20px] xs:text-[24px] mb-[12px] xs:mb-[16px]">
            News Letter
          </p>
          <p className="mt-[12px] xs:mt-[17px] leading-[1.4] text-[14px] xs:text-[16px] font-light text-secondary mb-[30px] xs:mb-[42px] mx-4 xs:mx-10">
            Subscribe to our news letter for updates, news and exclusive offers
          </p>
          <div className="flex flex-col-reverse justify-center items-center sm:flex-row gap-[15px] xs:gap-[17px]">
            <input
              type="email"
              className="placeholder:text-secondary p-3 py-[14px] xs:py-[17px] pl-[12px] xs:pl-[14px] w-[240px] xs:w-[276px] border border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Email"
            />
            <button className="rounded-sm bg-primary w-fit text-[16px] xs:text-[18px] font-nunito font-bold text-white px-[24px] xs:px-[28px] py-[14px] xs:py-[16px] hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex flex-col text-[14px] xs:text-[16px] items-center lg:pl-[60px] w-full max-w-[500px]">
          <div className="">
            <p className="text-primary font-lora text-[20px] xs:text-[24px] font-semibold">
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

      <div className="relative flex flex-col items-center w-full justify-center text-secondary">
        <div className="flex space-x-[20px] xs:space-x-[24px]">
          <img src={Facebook} className="w-6 h-6 xs:w-8 xs:h-8 hover:opacity-70 transition-opacity cursor-pointer" alt="" />
          <img src={Twitter} className="w-6 h-6 xs:w-8 xs:h-8 hover:opacity-70 transition-opacity cursor-pointer" alt="" />
          <img src={Instagram} className="w-6 h-6 xs:w-8 xs:h-8 hover:opacity-70 transition-opacity cursor-pointer" alt="" />
        </div>
        <hr className="border-0 h-[2px] w-[90%] xs:w-[85%] mt-4 xs:mt-5 bg-primary" />
        <p className="text-[14px] xs:text-[16px] mt-4 xs:mt-5 mb-8 xs:mb-10 text-center px-4">
          © Copyright 2023 · <span className="font-bold">YourCar</span> All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Contact;
