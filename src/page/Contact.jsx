import React from "react";
import Location from "../assets/Contact/Location.svg";
import Facebook from "../assets/Contact/Facebook.svg";
import Instagram from "../assets/Contact/Instagram.svg";
import Email from "../assets/Contact/Email.svg";
import Twitter from "../assets/Contact/Twitter.svg";
import Phone from "../assets/Contact/Phone.svg";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full    flex flex-col  justify-center items-center  pt-10 space-y-4  "
    >
      <div className="w-full px-[56px] md:px-[70px] flex flex-col text-center justify-center items-center  md:flex-row md:space-x-[50px]  md:space-y-0 font-nunito space-y-[36px] ">

        <div className="  flex flex-col md:justify-center  md:text-left text-center max-w-[350px]">
          <p className="text-primary  font-bold  text-[32px]  font-lora">
            Your<span className="font-normal">Car</span>
          </p>
          <div className=" mt-[17px]  text-[16px] mx-[10px] leading-[20px] space-y-[17px] text-secondary max-w-[400px] min-w-[150px]">
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

        <div className="flex flex-col max-w-[400px] font-nunito ">
          <p className="text-primary font-semibold text-[24px] mb-[16px] md:mb-[24px]">
            News Letter
          </p>
          <p className="text-secondary  mb-[42px] mx-10">
            Subscribe to our news letter for updates, news and exclusive offers
          </p>
          <div className="flex flex-col-reverse justify-center items-center  md:flex-row  md:space-x-[17px] gap-[19px] md:gap-[17px]">
            <input
              type="email"
              className=" placeholder:text-secondary p-3 py-[17px]  pl-[24px] w-[300px] border   border-primary opacity-50"
              placeholder="Email"
            />
            <button className="rounded-sm bg-primary w-fit text-[18px] font-nunito font-bold text-white px-[28px] py-[16px]">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex flex-col max-w-350px text-[16px] items-center  md:items-start md:ml-10 ">
          <div className="">
            <p className="text-primary font-lora text-[24px] font-semibold">
              Contact
            </p>
            <div className=" flex text-left space-x-[10px] space-y-[16px] items-center ">
              <img src={Location} className="  " alt="" />
              <div className=" ">
                <p>2038 2nd Avenue,</p>
                <p>Las Vegas, United States</p>
              </div>
            </div>
            <div className=" flex text-left space-x-[10px] space-y-[16px] items-center">
              <img src={Phone} className=" " alt="" />
              <div className=" ">
                <p>01444773421423</p>
                <p>01444773421424</p>
              </div>
            </div>
            <div className="  flex text-left space-x-[10px]  space-y-[16px]  items-end ">
              <img src={Email} className="" alt="" />
              <div className=" ">
                <p>info@YourCar.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justif-center items-center text-secondary ">
        <div className="flex space-x-[27px] mt-8">
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
