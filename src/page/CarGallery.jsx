// import React from "react";

// const gallary = [
//   { image: "../assets/CarGallery/C0.png" },
//   { image: "../assets/CarGallery/C1.png" },
//   { image: "../assets/CarGallery/C2.png" },
//   { image: "../assets/CarGallery/C3.png" },
//   { image: "../assets/CarGallery/C4.png" },
//   { image: "../assets/CarGallery/C5.png" },
//   { image: "../assets/CarGallery/C6.png" },
//   { image: "../assets/CarGallery/C7.png" },
//   { image: "../assets/CarGallery/C8.png" },
//   { image: "../assets/CarGallery/C9.png" },
// ];
// const CarGallery = () => {
//   return (
//     <div className="">
//       {gallary.map((item, index) => {
//         <div className="">
//           <img src={item.image} alt="" />
//         </div>;
//       })}
//     </div>
//   );
// };

// export default CarGallery;

import C0 from "../assets/CarGallery/C0.svg";
import C1 from "../assets/CarGallery/C1.svg";
import C2 from "../assets/CarGallery/C2.svg";
import C3 from "../assets/CarGallery/C3.svg";
import C4 from "../assets/CarGallery/C5.svg";
import C5 from "../assets/CarGallery/C4.svg";
import C6 from "../assets/CarGallery/C6.svg";
import C7 from "../assets/CarGallery/C7.svg";
import C8 from "../assets/CarGallery/C8.svg";


const gallery = [
  { image: C0 },
  { image: C1 },
  { image: C2 },
  { image: C3 },
  { image: C5 },
  { image: C4 },
  { image: C6 },
  { image: C7 },
  { image: C8 },
];


const CarGallery = () => {
  return (
    <div className="grid w-full grid-cols-1  md:grid-cols-3 ">
      {gallery.map((item, index) => (
        <div key={index} className="image-container overflow-hidden relative  ">
            <div className={`absolute w-full h-full flex flex-col items-center justify-center text-white   px- ${index  == 4 ? "bg-transparent":"hidden"}`}>
            <h1 className="text-center font-semibold text-[32px] ">Tesla Model 3</h1>
            <p className="text-center  font-semibold text-[20px] mt-[10px]">Disruptive, avant-garde, futuristic, innovative.</p>
            <button className="pointer py-[8px] px-[28px] rounded-[8px] font-bold border-2 w-fit mt-[28px]">Contact</button>
          </div>
          <img src={item.image} className={`  mx-auto   w-full h-full object-cover object-center
            ${
              (index == 1 || index == 4 || index == 8 )?"block":"hidden md:block"
              
            }
            
            `}alt={`Car ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default CarGallery;
