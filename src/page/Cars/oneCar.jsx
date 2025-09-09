import React from "react";
import Cars from "./Cars";
import Car1 from "/assets/Cars/Car1.png";
import Slider from "react-slick";
import carsData from "../data.json";
import SvgOne from "/assets/Cars/Seats.svg";
import SvgTwo from "/assets/Cars/Luggage.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { incrementAmount, decrimentAmount } from "../../features/slice";

const Car = ({ CarsData }) => {
  const dispatch = useDispatch();
  const name = CarsData.name;
  return (
    <div className="min-w-[300px] xs:min-w-[350px] sm:min-w-[400px] md:min-w-[450px] h-[580px] xs:h-[640px] flex px-2 xs:px-4 sm:px-[3.6rem] py-4">
      <div className="font-nunito font-light text-[10px] xs:text-[12px] bg-white py-[30px] xs:py-[50px] mx-auto shadow-2xl px-4 xs:px-6 w-full">
        <div>
          <img
            src={CarsData.image}
            className="w-[200px] xs:w-[240px] sm:w-[260px] h-[90px] xs:h-[100px] sm:h-[110px] mx-auto flex-shrink-0 object-contain"
            alt={CarsData.name}
          />
        </div>
        <div className="text-[18px] xs:text-[20px] sm:text-[24px] font-extrabold text-primary text-center pt-[12px] xs:pt-[18px]">
          {CarsData.name}
        </div>
        <div className="pt-[8px] xs:pt-[10px] pb-[8px] xs:pb-[10px] text-center font-light text-[14px] xs:text-[16px]">
          {CarsData.class}
        </div>
        <div className="flex flex-col">
          <div className="px-[20px] xs:px-[36px] mb-auto text-[12px] xs:text-[14px] leading-[1.4]">{CarsData.description}</div>
          <div className="flex justify-center items-center mt-12 xs:mt-16 sm:mt-20 px-[16px] xs:px-[26px]">
            <div className="mr-auto">
              <div className="flex space-x-2 xs:space-x-3 text-[16px] xs:text-[18px] sm:text-[20px] text-primary font-medium">
                <img src={SvgOne} alt="Seats" className="w-4 h-4 xs:w-5 xs:h-5" />
                <div>
                  {CarsData.seats} <span>Seats</span>
                </div>
              </div>
              <div className="flex space-x-2 xs:space-x-3 text-[16px] xs:text-[18px] sm:text-[20px] text-primary font-medium mt-2">
                <img src={SvgTwo} alt="Luggage" className="w-4 h-4 xs:w-5 xs:h-5" />
                <div>
                  {CarsData.luggage} <span>Luggage</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() => {
                  dispatch(decrimentAmount({ name }));
                }}
                className="h-[30px] xs:h-[35px] w-[30px] xs:w-[35px] bg-primary text-white rounded-tl-[4px] rounded-bl-[4px] hover:bg-primary/90 transition-colors"
              >
                -
              </button>
              <div className="bg-white h-[30px] xs:h-[35px] w-[30px] xs:w-[35px] flex justify-center items-center text-[18px] xs:text-[24px] text-secondary">
                {CarsData.amount}
              </div>
              <button
                onClick={() => {
                  dispatch(incrementAmount({ name }));
                }}
                className="h-[30px] xs:h-[35px] w-[30px] xs:w-[35px] bg-primary rounded-tr-[4px] rounded-br-[4px] text-white hover:bg-primary/90 transition-colors"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Car;
