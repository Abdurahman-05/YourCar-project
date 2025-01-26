import store from './store'
import Car1 from "../assets/Cars/car1.png";


const initial =[

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
]



const reducer = (state = initial , action)=> {
 switch (action.type){
  case 'INCRIMENT':
    return state.map((product) => (
      product.id == action.payload ? {...product, count : product.count + 1}:product
    ));
    
  case 'DECRIMENT':
    return state.map((product) => (
      product.id == action.payload && product.count > 0 ? {...product, count : product.count - 1}:product
    ));
  default : 
   return state;
 }
}

export default reducer


