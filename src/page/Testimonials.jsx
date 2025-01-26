import React from "react";
import Car from "../assets/comment/car4.svg";
import Star from "../assets/comment/Star.png";
import Title from "../component/Title";
const Testimonials = () => {
  return (
    <div className=" w-full h-fit font-lora   font-bold text-white bg-secondary py-16 ">
      <div className="flex flex-col  relative  mb-[55px]">
        <div
          className={`md:text-[100px] lg:text-[120px] text-[45px] font-lora text-center text-[#EBEBEB] md:text-[#EBEBEB] font-bold opacity-10`}
        >
          TESTIMONIALS
        </div>
        <p
          className={`md:text-[46px] text-[24px] font-lora text-white font-semibold absolute md:bottom-[12px] bottom-[0px] left-[40%]`}
        >
          Testimonials
        </p>
      </div>

      <div className="relative w-2/3 mx-auto pb-[43px]">
        <div className="py-[55px]     flex flex-col justify-center items-center   bg-white relative">
          <p
            className="font-medium font-lato italic text-[#272727]
          text-center  leading-[36px] text-[24px] mr-[110px] ml-[135px] mb-[42px]"
          >
            I recently bought a car through YourCar and I was blown away by
            their exceptional service. The staff were friendly and
            knowledgeable, and they helped me find the perfect car for my needs.
            I highly recommend YourCar to anyone looking for a luxury car buying
            experience.
          </p>
          

          <div className="mb-[25px]">
            <img src={Star} className="h-[20px]" alt="" />
          </div>

          <div className="flex flex-col justify-center items-center md:flex-row text-black space-x-[18.4px] font-nunito  ">
            <p className="text-secondary font-bold text-[32px]">Annie Rudy</p>
            <p className="text-[#979797] font-light text-[24px] ">Las vegas</p>
          </div>
        </div>
        <div className=" w-[104px]  md:w-[360px] absolute bottom-[2px] right-[-34px] md:bottom-[-70px] md:right-[-96px]">
          <img src={Car} className=" z-40 " alt="" />
        </div>
      </div>
    </div>


//     <div class="relative w-full sm:w-80 md:w-96 lg:w-1/2 h-64 bg-gray-200">
//   {/* <!-- Your content goes here --> */}

//   <div class="absolute bottom-0 right-0 p-2 bg-blue-500 text-white">
//     Overlap Content
//   </div>
// </div>

  );
};

export default Testimonials;
