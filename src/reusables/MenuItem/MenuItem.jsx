import Button from "../Button/Button";
import styles from "./MenuItem.module.css";
function MenuItem() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="./cabbage.jpg" alt="" className={styles.image} />
      </div>
      <div className={styles.contentContainer}>
        <h3 className={styles.name}>Cabbage</h3>
        <p className={styles.bg} title="Category">
          Bugger
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Perspiciatis, quidem.
        </p>
        <p className={styles.bg}>Ingredients</p>
        <div className={styles.innerContentContainer}>
          <div>
            <p className={styles.price}>$9.99</p>
          </div>
          <div className={styles.btnContainer}>
            <Button customClass={`${styles.btn} ${styles.ctaBtn}`}>
              Add to Cart
            </Button>
            <Button customClass={`${styles.btn} ${styles.buyBtn}`}>
              Buy Now
            </Button>
            <Button customClass={`${styles.btn} ${styles.favouriteBtn}`}>
              <i className="lar la-heart"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
