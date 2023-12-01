import HomeCtaButton from "../../../reusables/HomeCtaButton/HomeCtaButton";
import MainSection from "../../../reusables/MainSection/MainSection";
import styles from "./Hero.module.css";
function Hero() {
  return (
    <MainSection customClass={styles.section}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.mainHeading}>
            A <span className="main-text">Gentle Taste</span> To Remember.{" "}
            <br /> Eat, Enjoy & Live.
          </h1>
          <div className={styles.buttonsContainer}>
            <HomeCtaButton customClass={styles.ctaBtn}>Menu</HomeCtaButton>
            <HomeCtaButton customClass={styles.ctaBorderBtn}>
              About us
            </HomeCtaButton>
          </div>
        </div>
      </div>
    </MainSection>
  );
}

export default Hero;
