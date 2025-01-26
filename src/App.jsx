// import React from 'react'

// import Navbar from './component/Navbar.jsx'
// import Cars from './component/Cars.jsx'
// import Car from './component/Car.jsx'
// import OneCar from './component/OneCar.jsx'
// import CarSlick from './component/carSlick.jsx'

import Contact from './page/Contact.jsx'
import Brand from "./page/Brand.jsx";
import CarGallery from "./page/CarGallery.jsx";
import Testimonials from "./page/Testimonials.jsx";
import Service from "./page/Service.jsx";
import Title from "./component/Title.jsx";
import About from "./page/About.jsx";
import Hero from "./page/Heroo.jsx";
import Background from "./assets/nav/Background.png";
import Nav from "./component/nav.jsx";
import "./style.css";
const App = () => {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <CarGallery />
      <Testimonials />
      <Brand />
      <Contact/>  
    </>
  );
};

export default App;

{
  /* 
<Service/>
<Cars /> 
<Car /> 
<CarGallery/>
 */
}
{
  /* <CarSlick/> */
}
{
  /* <Test/> */
}
