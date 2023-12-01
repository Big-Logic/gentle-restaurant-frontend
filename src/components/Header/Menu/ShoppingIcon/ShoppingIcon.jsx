import styles from "./ShoppingIcon.module.css";
function ShoppingIcon() {
  return (
    <a href="http://" className={styles.shoppingIcon}>
      <span className="las la-shopping-cart"></span>
      <span className={styles.shoppingFigure}>5</span>
    </a>
  );
}

export default ShoppingIcon;
