import Menu from "./Menu/Menu";
import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.mainContainer}>
        <Menu />
      </div>
    </header>
  );
}

export default Header;
