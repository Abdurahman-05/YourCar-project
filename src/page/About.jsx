import Car from "../assets/hero/brownCar.svg";

const About = () => {
  return (
    <div id="about" className="bg-[#fefefe] py-[56px] px-[30px] sm:px-[80px] ">
      <h1 className="font-bold font-lora text-center text-[64px]  sm:text-[84px] md:text-[124px]  sm:text-left text-[#ebebeb] ">
        ABOUT US
      </h1>
      <div className="grid lg:grid-cols-2 gap-[45px] ">
        <div className="relative font-lora">
          <h1 className="absolute  text-primary font-bold font-lora text-[34px] top-[-48px] left-[165px] sm:top-[-69px] sm:left-[-6px] sm:text-[64px] md:left-[-5px] md:top-[-86px] ">
            About
          </h1>
          <p className="pt-11 text-[20px] text-[#232730]  leading-[36px]  md:leading-[30px] lg:leading-[24px] ">
            YourCar is a luxury car dealership that offers a personalized and
            first-class experience to its clients. Our team of experienced
            professionals is dedicated to providing exceptional service and
            finding the perfect vehicle to match our clients' unique preferences
            and requirements. We have an extensive selection of high-end
            vehicles, ranging from sports cars to SUVs, all of which are
            maintained to the highest standards of quality and safety.
          </p>

          <p className="pt-11 text-[20px] text-[#232730]  leading-[36px]  md:leading-[30px] lg:leading-[24px] ">

            At YourCar, we are committed to creating a stress-free and enjoyable
            car buying experience. We understand that purchasing a luxury car
            can be a significant investment, which is why we offer flexible
            financing options to make the process more manageable. Our team is
            available to answer any questions and provide guidance throughout
            the entire buying process. We take pride in our outstanding customer
            service and attention to detail, and we are confident that our
            clients will be satisfied with their experience at YourCar.
          </p>
        </div>

        <div className="hidden lg:block">
          <img src={Car}  className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
