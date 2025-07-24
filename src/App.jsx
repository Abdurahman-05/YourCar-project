import Cars from "./page/Cars/Cars.jsx";
import Contact from "./page/Contact.jsx";
import Brand from "./page/Brand.jsx";
import CarGallery from "./page/CarGallery.jsx";
import Testimonials from "./page/testimonials/Testimonials.jsx";
import Service from "./page/Service.jsx";
import About from "./page/About.jsx";
import Hero from "./page/Heroo.jsx";


import "./style.css";
const App = () => {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Cars />
      <CarGallery />
      <Testimonials />
      <Brand />
      <Contact />
    </>
  );
};

export default App;
