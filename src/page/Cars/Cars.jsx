import React from "react";
import Car from "./oneCar";
import Slider from "react-slick";
import'./style.css'
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



21

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-prev slick-arrow" +
      (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    Previous
  </button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    Next
  </button>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <SlickArrowLeft />,
  nextArrow: <SlickArrowRight />,
};

const Cars = () => {
  const products= useSelector((store) => store.Cars.products);

  var settings = {
    arrows:true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    
  prevArrow: <SlickArrowLeft />,
  nextArrow: <SlickArrowRight />, 
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
             
            {products.map((CarsData, i) => (
              <div key={i} className=''>
                <Car CarsData={CarsData} />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Cars;


// nextArrow:(
//   <div className="relative">
//     <div className=
//     "w-[40px] h-[40px] flex justify-center rounded-[20px] bg-primary absolute">
//       <button
//         className=""

//       >
//         <svg
//           width="24"
//           height="24"
//           viewBox="0 0 10 16"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M0.585815 2.34317L2.00003 0.928955L9.0711 8.00002L2.00003 15.0711L0.585815 13.6569L6.24267 8.00002L0.585815 2.34317Z"
//             fill="white"
//           />
//         </svg>
//       </button>
//     </div>
//   </div>
// ),
// prevArrow: (
//   <div>
//     <div className="w-[40px] h-[40px] flex justify-center rounded-[20px] bg-primary ">
//       <button
//         className=""
   
//       >
//         <svg
//           width="24"
//           height="24"
//           viewBox="0 0 10 16"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M9.41418 2.34317L7.99997 0.928955L0.928904 8.00002L7.99997 15.0711L9.41418 13.6569L3.75733 8.00002L9.41418 2.34317Z"
//             fill="white"
//           />
//         </svg>
//       </button>
//     </div>
//   </div>

// ),