import React from "react";
// import Car1 from "../assets/Cars/car1.png";
// import Slider from "react-slick";
// import carsData from "./data.json";
// import SvgOne from "../assets/Cars/Seats.svg";
// import SvgTwo from "../assets/Cars/Luggage.svg";
import Car from "./oneCar";
import data from "../data.json";
import Slider from "react-slick";
import'./style.css'
import img from '../../assets/arrow.png'

const Cars = () => {
  const dataArray = [...data.cars];

  var settings = {
    arrows:true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    
    nextArrow: (
      <div className="relative">
        <div className=
        "w-[40px] h-[40px] flex justify-center rounded-[20px] bg-primary absolute">
          <button
            className=""
            // onClick={handleGoToClick(--currentSlid)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.585815 2.34317L2.00003 0.928955L9.0711 8.00002L2.00003 15.0711L0.585815 13.6569L6.24267 8.00002L0.585815 2.34317Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className=
        "w-[40px] h-[40px] flex justify-center rounded-[20px] bg-primary ">
          <button
            className=""
            // onClick={handleGoToClick(++currentSlid)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.41418 2.34317L7.99997 0.928955L0.928904 8.00002L7.99997 15.0711L9.41418 13.6569L3.75733 8.00002L9.41418 2.34317Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      // <SlickArrowLeft />
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        },
      },
    ],
  };

  return (
    <div id="cars" className=" bg-[#fafafa]  items-center pb-16">
      <h1 className="text-[128px] text-lora text-center font-bold text-[#EBEBEB]">
        CARS
      </h1>
      <div className="relative">
        <h3 className=" absolute top-[-85px] left-1/2 transform -translate-x-1/2 text-[48px] font-bold text-primary  sm:">
          cars
        </h3>
      </div>
      <div className="slider-container w-[90%] mx-auto">
        <Slider {...settings}>
            {dataArray.map((CarsData, index) => (
              <div key={index} className=''>
                <Car CarsData={CarsData} />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Cars;

// import React from "react";
// // import OneCar from "../component/OneCar.jsx";
// import Car1 from "../assets/Cars/car1.png";
// import Slider from "react-slick";
// import carsData from "./data.json";
// import SvgOne from "../assets/Cars/Seats.svg";
// import SvgTwo from "../assets/Cars/Luggage.svg";

// const Cars = () => {

//   return (
//     <div
//       id="cars"
//       className="w-full h-fit  bg-[#fafafa]  items-center pb-16"
//     >
//       <div className="relative flex justify-center font-lora">
//         <h1 className="text-[128px] font-bold text-[#EBEBEB]">CARS</h1>
//         <p className="font-bold text-[32px] text-primary absolute bottom-6 left-[48%]">
//           Cars
//         </p>
//       </div>

//     <section className="mt-[55px] space-y-4 mx-auto">
//       <div className="slider-container">
//         <Slider {...settings}>
//           {carsData.cars.map((car, index) => (
//             <div key={index} className="font-nunito font-light text-[12px] bg-white py-[24px] mx-auto shadow-2xl">
//               {console.log(index)}
//               <div>
//                 <img src={car.image} className="w-[260px] h-[110px] mx-auto" alt={car.name} />
//               </div>
//               <div className="text-[24px] font-extrabold text-primary text-center pt-[18px]">
//                 {car.name}
//               </div>
//               <div className="pt-[10px] pb-[10px] text-center font-light">
//                 {car.class}
//               </div>
//               <div className="px-[36px]">{car.description}</div>
//               <div className="flex justify-center items-center mt-10 mb-[34px] px-[26px]">
//                 <div className="mr-auto">
//                   <div className="flex space-x-3 text-[20px] text-primary font-medium">
//                     <img src={SvgOne} alt="Seats" />
//                     <div>{car.seats} <span>Seats</span></div>
//                   </div>
//                   <div className="flex space-x-3 text-[20px] text-primary font-medium">
//                     <img src={SvgTwo} alt="Luggage" />
//                     <div>{car.luggage} <span>Luggage</span></div>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center">
//                   <button className="px-[10px] bg-primary text-white rounded-tl-[4px] rounded-bl-[4px]">-</button>
//                   <div className="bg-white px-[10px]">0</div>
//                   <button className="px-[10px] bg-primary rounded-tr-[4px] rounded-br-[4px] text-white">+</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//     </div>
//   );
// };

// export default Cars;

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import C0 from "../assets/CarGallery/C0.svg";
// import C1 from "../assets/CarGallery/C1.svg";
// import C2 from "../assets/CarGallery/C2.svg";
// import C3 from "../assets/CarGallery/C3.svg";
// import C4 from "../assets/CarGallery/C5.svg";
// const Cars = () => {
//   // Slick settings
//   const settings = {
//     dots: true,           // Show dots navigation
//     infinite: true,       // Loop slides infinitely
//     speed: 500,          // Slide transition speed
//     slidesToShow: 1,     // Number of slides visible at a time
//     slidesToScroll: 1,   // Number of slides to scroll
//   };

//   return (
//     <div className="w-[80%] bg-black mx-auto mt-10">
//       <h2 className="text-2xl font-bold text-center">Basic Slick Slider</h2>
//       <Slider {...settings}>
//         <div>
//           <img src={C1}
//           className="w-full" />
//         </div>
//         <div>
//           <img src={C2} className="w-full" />
//         </div>
//         <div>
//           <img src={C3} className="w-full" />
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default Cars;

// // ==============================================
// <div className=" font-nunito font-light text-[12px] bg-white  py-[24px]  mx-auto shadow-2xl ">
// {console.log(index)}
// <div className="">
//   <img
//     src={car.image}
//     className="w-[260px] h-[110px] mx-auto"
//     alt=""
//   />
// </div>
// <div className="text-[24px] font-extrabold text-primary text-center pt-[18px]  ">
//   {car.name}
// </div>
// <div className="pt-[10px] pb-[10px]  text-center  font-light">
//   {car.class}
// </div>
// <div className="px-[36px]">{car.description}</div>
// <div className="flex justify-center items-center mt-10 mb-[34px] px-[26px]">
//   <div className="mr-auto ">
//     <div className="flex space-x-3 text-[20px] text-primary font-medium">
//       <img src={SvgOne} alt="" />
//       <div>
//         {car.seats} <span className="">Seats</span>
//       </div>
//     </div>
//     <div className="flex space-x-3 text-[20px] text-primary font-medium">
//       <img src={SvgTwo} alt="" />
//       <div>
//         {car.luggage}
//         <span className=""> Luggage</span>
//       </div>
//     </div>
//   </div>
//   <div className="flex items-center justify-center ">
//     <button className="px-[10px]  bg-primary text-white rounded-tl-[4px] rounded-bl-[4px]">
//       -
//     </button>
//     <div className="bg-white  px-[10px]  bg">0</div>
//     <button className="px-[10px]  bg-primary rounded-tr-[4px]  rounded-br-[4px]  text-white">
//       +
//     </button>
//   </div>
// </div>
