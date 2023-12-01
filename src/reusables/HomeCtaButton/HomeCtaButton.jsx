import styles from "./HomeCtaButton.module.css";
function HomeCtaButton({ children, hrefValue, customClass }) {
  return (
    <a href={hrefValue} className={`${styles.homeCtaButton} ${customClass}`}>
      {children}
    </a>
  );
}

export default HomeCtaButton;
