import styles from "./MainSection.module.css";
function MainSection({ children, customClass }) {
  return (
    <section className={`${styles.mainSection} ${customClass}`}>
      <div className={styles.mainContainer}>{children}</div>
    </section>
  );
}

export default MainSection;
