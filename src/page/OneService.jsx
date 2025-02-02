const OneService = ({ title, description, image }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center  space-y-[18px] md:space-y-[60px] mb-[86px] w-full">
      <img src={image} className= "w-[104px]" alt="Hand icon" />
      <div className="space-y-3 flex flex-col justify-center items-center">
      <h2 className="text-[30px]  font-bold text-[#12273d]">{title}</h2>
      <p className="text-[24px] font-nunito text-secondary ">{description}</p>
      </div>
    </div>
  );
};

export default OneService;
