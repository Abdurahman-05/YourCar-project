import React from "react";

const Title = ({mainTitle , subTitle,color1,color2} ) => {
  return (

      <div className="flex flex-col  relative ">
        <div className={`text-[64px] md:text-[124px] font-lora text-center ${color1}  md:text-[#EBEBEB] font-bold`}>
          {mainTitle}
        </div>
        <p className={`md:text-[48px] text-24px font-lora ${color2} font-semibold absolute bottom-[12px] left-[44%]`}>
          {subTitle}
        </p>
      </div>

  );
};

export default Title;
