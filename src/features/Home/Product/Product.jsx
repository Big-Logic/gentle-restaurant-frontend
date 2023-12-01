import HomeCtaButton from "../../../reusables/HomeCtaButton/HomeCtaButton";
import HomeSectionHeading from "../../../reusables/HomeSectionHeading/HomeSectionHeading";
import MainSection from "../../../reusables/MainSection/MainSection";
import ChangeableText from "./ChangeableText/ChangeableText";
import styles from "./Product.module.css";
function Product() {
  return (
    <MainSection customClass={styles.sectionContainer}>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <HomeSectionHeading customClass={styles.heading}>
            Food From Different Categories. <ChangeableText />
          </HomeSectionHeading>

          <HomeCtaButton customClass={styles.ctaBtn}>Menu</HomeCtaButton>
        </div>
      </div>
    </MainSection>
  );
}

export default Product;
