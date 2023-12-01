import HomeCtaButton from "../../../../../reusables/HomeCtaButton/HomeCtaButton";
import styles from "./AuthButtons.module.css";
function AuthButtons() {
  return (
    <div className={styles.loginSignupContainer}>
      <a href="#">Login</a>
      <HomeCtaButton customClass={styles.ctaBtn}>Sign up</HomeCtaButton>
    </div>
  );
}

export default AuthButtons;
