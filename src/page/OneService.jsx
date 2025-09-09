const OneService = ({ title, description, image }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center space-y-[18px] md:space-y-[60px] mb-[60px] xs:mb-[86px] w-full px-4">
      <img src={image} className="w-[80px] xs:w-[104px] hover:scale-110 transition-transform" alt="Service icon" />
      <div className="space-y-3 flex flex-col justify-center items-center">
        <h2 className="text-[24px] xs:text-[28px] sm:text-[30px] font-bold text-[#12273d]">{title}</h2>
        <p className="text-[16px] xs:text-[18px] sm:text-[20px] lg:text-[18px] font-nunito text-secondary leading-[1.5]">{description}</p>
      </div>
    </div>
  );
};

export default OneService;
