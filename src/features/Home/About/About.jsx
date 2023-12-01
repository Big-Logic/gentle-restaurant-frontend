import MainSection from "../../../reusables/MainSection/MainSection";
import HomeSectionHeading from "../../../reusables/HomeSectionHeading/HomeSectionHeading";
import styles from "./About.module.css";
function About() {
  return (
    <MainSection customClass={styles.section}>
      <div className={styles.container}>
        <div>
          <div className={styles.imageContainer}>
            <img
              src="./aboutimg.jpg"
              alt="Something"
              className={styles.image}
            />
          </div>
        </div>
        <div>
          <HomeSectionHeading>About Us</HomeSectionHeading>
          <p>
            We are a liberian owned restaurant providing you with Liberian made
            and non-Liberian made dishes.
          </p>
        </div>
      </div>
    </MainSection>
  );
}

export default About;
