import ProfileMenu from "./ProfileMenu/ProfileMenu";
import ShoppingIcon from "./ShoppingIcon/ShoppingIcon";
import styles from "./Menu.module.css";
function Menu() {
  return (
    <nav className={styles.nav}>
      <div>
        <span>GR</span>
      </div>
      <div className={styles.navContent}>
        <div>
          <a href="http://" className={styles.menu}>
            Menu
          </a>
          <ShoppingIcon />
        </div>
        <ProfileMenu />
      </div>
    </nav>
  );
}

export default Menu;
