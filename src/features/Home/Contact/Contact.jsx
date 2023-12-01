import HomeSectionHeading from "../../../reusables/HomeSectionHeading/HomeSectionHeading";
import MainSection from "../../../reusables/MainSection/MainSection";
import styles from "./Contact.module.css";
import Map from "./Map/Map";
function Contact() {
  return (
    <MainSection customClass={styles.section}>
      <div className={styles.container}>
        <div>
          <HomeSectionHeading>Find Us</HomeSectionHeading>
          <h3 className={styles.heading2}>Location</h3>
          <p>Flower Pot, Duport Road Paynesville City, Monrovia - Liberia</p>

          <h3 className={styles.heading2}>Contact</h3>
          <a href="tel:+231775311159" className={styles.contactNum}>
            Phone1: +231-775-311-159
          </a>
          <a href="tel:+231555892927" className={styles.contactNum}>
            Phone2: +231-555-892-927
          </a>
        </div>
        <Map />
      </div>
    </MainSection>
  );
}

export default Contact;
