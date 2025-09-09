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
    <div className="w-full bg-[#fafafa] flex flex-wrap justify-center items-center gap-[30px] xs:gap-[50px] sm:gap-[77px] my-12 xs:my-16 px-4">
      <img src={BMW} alt="BMW" className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 hover:scale-110 transition-transform" />
      <img src={Mercedes} alt="Mercedes" className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 hover:scale-110 transition-transform" />
      <img src={Mitsubishi} alt="Mitsubishi" className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 hover:scale-110 transition-transform" />
      <img src={Nissan} alt="Nissan" className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 hover:scale-110 transition-transform" />
      <img src={Subaru} alt="Subaru" className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 hover:scale-110 transition-transform" />
      <img src={Suzuki} alt="Suzuki" className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 hover:scale-110 transition-transform" />
      <img src={Toyota} alt="Toyota" className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 hover:scale-110 transition-transform" />
      <img src={Volvo} alt="Volvo" className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 hover:scale-110 transition-transform" />
    </div>
  );
};

export default Brand;
