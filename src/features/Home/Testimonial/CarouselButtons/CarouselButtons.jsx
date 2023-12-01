import styles from "./CarouselButtons.module.css";
function CarouselButtons({
  handleLeftBtnClick,
  handleRightBtnClick,
  activeIndex,
  testimonials,
}) {
  return (
    <div className={styles.container}>
      <button
        className={`${styles.btn} ${activeIndex === 0 && styles.btnDisabled}`}
        onClick={handleLeftBtnClick}
        disabled={activeIndex === 0}
      >
        <i className="las la-arrow-left"></i>
      </button>
      <button
        className={`${styles.btn} ${
          activeIndex === testimonials.length - 1 && styles.btnDisabled
        }`}
        onClick={handleRightBtnClick}
        disabled={activeIndex === testimonials.length - 1}
      >
        <i className="las la-arrow-right"></i>
      </button>
    </div>
  );
}

export default CarouselButtons;
