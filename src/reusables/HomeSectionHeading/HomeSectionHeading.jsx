import styles from "./HomeSectionHeading.module.css";

function HomeSectionHeading({ children, customClass }) {
  return (
    <div className={styles.container}>
      <h2 className={`${styles.heading} ${customClass}`}>{children}</h2>
    </div>
  );
}

export default HomeSectionHeading;
