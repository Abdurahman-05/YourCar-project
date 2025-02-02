import React from "react";
import data from "./data.json";
import Seats from "../assets/Cars/Seats.svg";
import Luggage from "../assets/Cars/Luggage.svg";
import Slider from "react-slick";
import "../app.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Silk = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    // <div className="bg-blue-500">

    //    <Slider {...settings}>
    //   {data.cars.map((car, index) => (
    //     <div key={index} className="w-[300px] h-[520px]  border border-primary my-7">
    //       <div className=" w-full">
    //         <img
    //           src={car.image}
    //           className=" w-full m-[36px] h-[160px] object-cover rounded-lg mb-4"
    //           alt=""
    //         />
    //       </div>
    //       <div className="text-center text-[24px] text-primary font-bold mt-[18px]">
    //         {car.class}
    //       </div>
    //       <div className="text-center text-[12px]  mt-[13px]">{car.name}</div>

    //       <div className=" text-[12px] mx-[42px] mt-[27px]">
    //         {car.description}
    //       </div>
    //       <div className="mt-[47px] ml-[36px] mb-[38px]">
    //         <div className="">
    //           <div className="flex space-x-[15px]">
    //             <img src={Seats} alt="" />
    //             <p>{car.seats} Seats</p>
    //           </div>
    //         </div>
    //         <div className="flex space-x-[15px]">
    //           <img src={Luggage} alt="" />
    //           <p>{car.luggage} Luggage</p>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    //    </Slider>
    // </div>

    <div className="carousel">
      <h2>carousel Tutorial</h2>
      <Slider {...settings}>
      {data.cars.map((car, index) => (
        <div key={index} id="box" className=" max-w-[378px] h-[520px]   flex justify-center items-center bg-white my-7">
          <div className=" w-full mx-auto ">
            <img
              src={car.image}
              className="max-w-[311px] h-[160px] my-5  rounded-lg mb-4"
              alt=""
            />
          </div>
          <div className="text-center text-[24px] text-primary font-bold mt-[18px]">
            {car.class}
          </div>
          <div className="text-center text-[12px]  mt-[13px]">{car.name}</div>

          <div className=" text-[12px] mx-[42px] mt-[27px]">
            {car.description}
          </div>
          <div className="mt-[47px] ml-[36px] mb-[38px]">
            <div className="">
              <div className="flex space-x-[15px]">
                <img src={Seats} alt="" />
                <p>{car.seats} Seats</p>
              </div>
            </div>
            <div className="flex space-x-[15px]">
              <img src={Luggage} alt="" />
              <p>{car.luggage} Luggage</p>
            </div>
          </div>
        </div>
      ))}
      </Slider>
    </div>
  );
};

export default Silk;
