import { useEffect, useState } from "react";
import CarouselButtons from "../CarouselButtons/CarouselButtons";
import TestimonialContent from "../TestimonialContent/TestimonialContent";
import styles from "./TestimonialCarousel.module.css";
function TestimonialCarousel() {
  const testimonials = ["ab", "dc", "ef"];
  const [activeIndex, setActiveIndex] = useState(0);

  // reverse slider until the first slide is reach
  function handleLeftBtnClick() {
    if (activeIndex === 0) return;
    setActiveIndex((prev) => prev - 1);
  }

  // forward slider until the last slide is reach
  function handleRightBtnClick() {
    if (activeIndex === testimonials.length - 1) return;
    setActiveIndex((prev) => prev + 1);
  }

  // select all carousel elements a display the needed one
  useEffect(
    function () {
      const ele = document.querySelectorAll(".tsc");
      ele.forEach(
        (e, i) =>
          (e.style.transform = `translateX(${(i - activeIndex) * 100}%)`)
      );
    },
    [activeIndex]
  );
  return (
    <>
      <CarouselButtons
        handleLeftBtnClick={handleLeftBtnClick}
        handleRightBtnClick={handleRightBtnClick}
        activeIndex={activeIndex}
        testimonials={testimonials}
      />

      <div className={styles.container}>
        {testimonials.map((dt) => (
          <div className={`tsc ${styles.innerContainer}`} key={dt}>
            <TestimonialContent testimonial={testimonials[activeIndex]} />
            <TestimonialContent testimonial={testimonials[activeIndex]} />
          </div>
        ))}
      </div>
    </>
  );
}

export default TestimonialCarousel;
