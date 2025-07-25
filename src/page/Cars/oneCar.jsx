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
    <div className="min-w-[450px] h-[640px] flex px-[3.6rem] py-4 [@media(min-width:1040px)]:pl-[1px]">
      <div className="font-nunito font-light text-[12px] bg-white py-[50px] mx-auto shadow-2xl px-6">
        <div>
          <img
            src={CarsData.image}
            className=" w-[260px] h-[110px] mx-auto flex-shrink-0 "
            alt={CarsData.name}
          />
        </div>
        <div className="text-[24px] font-extrabold text-primary text-center pt-[18px]">
          {CarsData.name}
        </div>
        <div className="pt-[10px] pb-[10px] text-center font-light">
          {CarsData.class}
        </div>
        <div className="flex flex-col">
          <div className="px-[36px] mb-auto ">{CarsData.description}</div>
          <div className="flex justify-center items-center mt-20 px-[26px]">
            <div className="mr-auto">
              <div className="flex space-x-3 text-[20px] text-primary font-medium">
                <img src={SvgOne} alt="Seats" />
                <div>
                  {CarsData.seats} <span>Seats</span>
                </div>
              </div>
              <div className="flex space-x-3 text-[20px] text-primary font-medium">
                <img src={SvgTwo} alt="Luggage" />
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
                className="h-[35px] w-[35px] bg-primary text-white rounded-tl-[4px] rounded-bl-[4px]"
              >
                -
              </button>
              <div className="bg-white h-[35px] w-[35px] flex justify-center items-center text-[24px] text-secondary">
                {CarsData.amount}
              </div>
              <button
                onClick={() => {
                  dispatch(incrementAmount({ name }));
                }}
                className="h-[35px] w-[35px] bg-primary rounded-tr-[4px] rounded-br-[4px] text-white"
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
