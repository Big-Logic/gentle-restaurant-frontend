import HomeSectionHeading from "../../../reusables/HomeSectionHeading/HomeSectionHeading";
import MainSection from "../../../reusables/MainSection/MainSection";
import styles from "./Testimonial.module.css";
import TestimonialCarousel from "./TestimonialCarousel/TestimonialCarousel";
function Testimonial() {
  return (
    <MainSection customClass={styles.section}>
      <div>
        <HomeSectionHeading>
          People Are <br /> Eating and Coming <br /> Back
        </HomeSectionHeading>
        <TestimonialCarousel />
      </div>
    </MainSection>
  );
}

export default Testimonial;
