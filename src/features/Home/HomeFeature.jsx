import About from "./About/About";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Product from "./Product/Product";
import Testimonial from "./Testimonial/Testimonial";

function HomeFeature() {
  return (
    <>
      <Hero />
      <About />
      <Product />
      <Testimonial />
      <Contact />
    </>
  );
}

export default HomeFeature;
