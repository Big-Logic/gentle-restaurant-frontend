import HomeSectionHeading from "../../reusables/HomeSectionHeading/HomeSectionHeading";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <HomeSectionHeading customClass={styles.heading}>
          Gentle Restaurant
        </HomeSectionHeading>
        <p>Eat, Enjoy & Live</p>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} All Right Reserved
        </p>
      </div>
    </section>
  );
}

export default Footer;
