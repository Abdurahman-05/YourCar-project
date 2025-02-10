import React from "react";
import Car from "../../assets/comment/car4.svg";
import Star from "../../assets/comment/Star.png";
import Title from "../../component/Title";

const testimonial = () => {
  return (
    <>
      <div className=" bg-white relative  mx-[30px] py-[60px] [@media(min-width:850px)]:mx-[150px]">
        <p
          className="font-medium font-lato italic text-[#272727]
          text-center  leading-[25px] text-[15px] md:text-[24px] md:leading-[36px] mx-[65px] mb-[42px] "
        >
          I recently bought a car through YourCar and I was blown away by their
          exceptional service. The staff were friendly and knowledgeable, and
          they helped me find the perfect car for my needs. I highly recommend
          YourCar to anyone looking for a luxury car buying experience.
        </p>

        <div className="mb-[25px] flex justify-center">
          <img src={Star} className="h-[20px]" alt="" />
        </div>

        <div className="flex flex-col justify-center items-center md:flex-row text-black  md:space-x-[45px] font-nunito  ">
          <p className="text-secondary font-bold text-[22px] md:text-[28px]">Annie Rudy</p>
          <p className="text-[#979797] font-light text-[16px] md:text-[24px] ">Las vegas</p>
        </div>
      <div className=" w-[104px] h-[69px]  md:w-[342px] md:h-[227px] md:left-[86%] md:bottom-[-65px]  absolute bottom-[-20px] left-[94%] trasform -translate-x-1/2">
        <img src={Car} className="z-40" alt="" />
      </div>
      </div>
    </>
  );
};

export default testimonial;
