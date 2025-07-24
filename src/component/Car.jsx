import React from "react";
import { useState, useEffect } from "react";
import Car1 from "../assets/Cars/Car1.png";
import Seats from "../assets/Cars/Seats.png";
import Luggage from "../assets/Cars/luggage.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../App.css";

const data = [
  {
    id: 1,
    image: Car1,
    design: "SAV",
    model: "Mercedes M class",
    discription:
      "The Range Rover Sport is a versatile SUV that's perfect for both on and off-road adventures. With its powerful engine and advanced four-wheel drive system, this vehicle can handle any terrain with ease. It's also incredibly spacious, with room for up to seven passengers and plenty of cargo space.",
    numberOfSeats: "4 Seats",
    numberOfLuggege: "2 Luggage",
    count: 0,
  },
  {
    id: 2,
    image: Car1,
    design: "SAV",
    model: "Mercedes M class",
    discription:
      "The Range Rover Sport is a versatile SUV that's perfect for both on and off-road adventures. With its powerful engine and advanced four-wheel drive system, this vehicle can handle any terrain with ease. It's also incredibly spacious, with room for up to seven passengers and plenty of cargo space.",
    numberOfSeats: "4 Seats",
    numberOfLuggege: "2 Luggage",
    count: 0,
  },
  {
    id: 3,
    image: Car1,
    design: "SAV",
    model: "Mercedes M class",
    discription:
      "The Range Rover Sport is a versatile SUV that's perfect for both on and off-road adventures. With its powerful engine and advanced four-wheel drive system, this vehicle can handle any terrain with ease. It's also incredibly spacious, with room for up to seven passengers and plenty of cargo space.",
    numberOfSeats: "4 Seats",
    numberOfLuggege: "2 Luggage",
    count: 0,
  },
];
// design="SUV"

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Default value for large screens
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1124, // For medium screens (Tablets, etc.)
      settings: {
        slidesToShow: 2, // Show 2 items per slide on medium screens
      },
    },
    {
      breakpoint: 684, // For small screens (
      slidesToShow: 1, // Show 1 item per slide on small screens
    },
  ],
};

const Car = () => {
  const [items, setItems] = useState(data);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const decriment = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id == id && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
    dispatch({ type: "DECRIMENT", payload: id });
  };
  // useEffect(() => {
  //   console.log(products.map((items) => (items.count)));
  // }, [items]);

  const incriment = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id == id ? { ...item, count: item.count + 1 } : item
      )
    );

    dispatch({ type: "INCRIMENT", payload: id });
  };
  return (
    <div className="w-full bg-[#fafafa]  pb-32 ">
      <Slider {...settings}>
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center w-full p-10 mx-auto space-y-2 text-center bg-white  md:w-1/2 drop-shadow-md shadow-black"
          >
            <img src={item.image} alt="" />
            <h1 className="text-primary font-bold text-[24px]">
              {item.design}
            </h1>
            <h1 className="text-[12px] font-nunito font-light">{item.model}</h1>
            <p className="text-[12px] leading-6 font-nunito font-light pt-2">
              {item.discription}
            </p>
            <div className="flex items-center justify-between w-full pt-5 font-nunito text-primary">
              <div className="flex flex-col w-full ">
                <div className="flex items-center space-x-3">
                  <img src={Seats} alt="" />
                  <p>{item.numberOfSeats}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <img src={Luggage} alt="" />
                  <p>{item.numberOfLuggege}</p>
                </div>
              </div>
              <div className="flex items-center mr-10 justify-">
                <button
                  onClick={() => decriment(item.id)}
                  className="w-[30px] h-[30px]  bg-primary text-white  rounded-l-[4px]"
                >
                  -
                </button>
                <p className="w-[30px] text-center bg-white ">{item.count}</p>
                <button
                  onClick={() => incriment(item.id)}
                  className="w-[30px] h-[30px] rounded-r-[4px] text-white bg-primary"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Car;
