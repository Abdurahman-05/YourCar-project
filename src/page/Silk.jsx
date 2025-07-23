import React from "react";
import data from "./data.json";
import Seats from "../assets/Cars/Seats.svg";
import Luggage from "../assets/Cars/Luggage.svg";
import Slider from "react-slick";


const Silk = () => {

  return (
    
    <div className="carousel">
          {data.cars.map((car, index) => (
            <div key={index} id="box" className=" max-w-[378px] h-[520px]   flex justify-center items-center bg-white ">
              <div>
                <img
                  src={car.image}
                  className="w-[260px] h-[160px] "
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
        </div>
      );
    };
    
    





























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

    //     <div className="carousel">
    //       <h2>carousel Tutorial</h2>
    //       <Slider {...settings}>
    //       {data.cars.map((car, index) => (
    //         <div key={index} id="box" className=" max-w-[378px] h-[520px]   flex justify-center items-center bg-white my-7">
    //           <div className=" w-full mx-auto ">
    //             <img
    //               src={car.image}
    //               className="w-[260px] h-[160px] m-auto "
    //               alt=""
    //             />
    //           </div>
    //           <div className="text-center text-[24px] text-primary font-bold mt-[18px]">
    //             {car.class}
    //           </div>
    //           <div className="text-center text-[12px]  mt-[13px]">{car.name}</div>
    
    //           <div className=" text-[12px] mx-[42px] mt-[27px]">
    //             {car.description}
    //           </div>
    //           <div className="mt-[47px] ml-[36px] mb-[38px]">
    //             <div className="">
    //               <div className="flex space-x-[15px]">
    //                 <img src={Seats} alt="" />
    //                 <p>{car.seats} Seats</p>
    //               </div>
    //             </div>
    //             <div className="flex space-x-[15px]">
    //               <img src={Luggage} alt="" />
    //               <p>{car.luggage} Luggage</p>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //       </Slider>
    //     </div>
    //   );
    // };
    
    // export default Silk;





    export default Silk;