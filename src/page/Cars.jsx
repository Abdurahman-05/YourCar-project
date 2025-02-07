
// import React from "react";
// // import OneCar from "../component/OneCar.jsx";
// import Car1 from "../assets/Cars/car1.png";
// import Slider from "react-slick";
// import carsData from "./data.json";
// import SvgOne from "../assets/Cars/Seats.svg";
// import SvgTwo from "../assets/Cars/Luggage.svg";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Cars = () => {
//   const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         responsive: [
//           { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//           { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//         ],
//       };
    
//   return (
//     <div
//       id="cars"
//       className="w-full h-fit  bg-[#fafafa]  items-center pb-16"
//     >
//       <div className="font-lora relative flex justify-center">
//         <h1 className="text-[128px] font-bold text-[#EBEBEB]">CARS</h1>
//         <p className="font-bold text-[32px] text-primary absolute bottom-6 left-[48%]">
//           Cars
//         </p>
//       </div>

//       <section className="mt-[55px]  space-y-4 mx-auto">
//       <div className="slider-container">
//       <Slider {...settings}>
      
//           <div className="w-[300px] h-[200px]" key={index}>
           
//           </div>;
        
//         </Slider>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Cars;











// import React from "react";
// // import OneCar from "../component/OneCar.jsx";
// import Car1 from "../assets/Cars/car1.png";
// import Slider from "react-slick";
// import carsData from "./data.json";
// import SvgOne from "../assets/Cars/Seats.svg";
// import SvgTwo from "../assets/Cars/Luggage.svg";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Cars = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//       { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//     ],
//   };

//   return (
//     <div
//       id="cars"
//       className="w-full h-fit  bg-[#fafafa]  items-center pb-16"
//     >
//       <div className="font-lora relative flex justify-center">
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
//                 <div className="flex justify-center items-center">
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
//       <h2 className="text-center text-2xl font-bold">Basic Slick Slider</h2>
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
// <div className=" ">
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
//   <div className=" mr-auto ">
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
//   <div className="flex justify-center items-center ">
//     <button className="px-[10px]  bg-primary text-white rounded-tl-[4px] rounded-bl-[4px]">
//       -
//     </button>
//     <div className="bg-white  px-[10px]  bg">0</div>
//     <button className="px-[10px]  bg-primary rounded-tr-[4px]  rounded-br-[4px]  text-white">
//       +
//     </button>
//   </div>
// </div>