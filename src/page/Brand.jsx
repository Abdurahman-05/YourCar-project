import React from "react";
import BMW from "/assets/Logo/BMW.png";
import Mercedes from "/assets/Logo/Mercedes.png";
import Mitsubishi from "/assets/Logo/Mitsubishi.png";
import Nissan from "/assets/Logo/Nissan.png";
import Subaru from "/assets/Logo/Subaru.png";
import Suzuki from "/assets/Logo/Suzuki.png";
import Toyota from "/assets/Logo/Toyota.png";
import Volvo from "/assets/Logo/Volvo.png";

const Brand = () => {
  return (
    <div className="w-full   bg-[#fafafa] flex flex-wrap justify-center items-center gap-[77px] my-16 ">
      <img src={BMW} alt="" />
      <img src={Mercedes} alt="" />
      <img src={Mitsubishi} alt="" />
      <img src={Nissan} alt="" />
      <img src={Subaru} alt="" />
      <img src={Suzuki} alt="" />
      <img src={Toyota} alt="" />
      <img src={Volvo} alt="" />
    </div>
  );
};

export default Brand;
