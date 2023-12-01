import { useEffect } from "react";
import styles from "./ChangeableText.module.css";
function ChangeableText() {
  const data = ["Burger", "Bread", "Sandwich", "Pizza"];

  useEffect(function () {
    let activeIndex = 0;
    const texts = document.querySelectorAll(".textToChange");
    texts[activeIndex].classList.add(styles.textShow);
    activeIndex += 1;
    texts.forEach((ele) => {
      ele.classList.add(styles.textHide);
    });
    setInterval(() => {
      texts.forEach((ele) => {
        ele.classList.remove(styles.textShow);
      });
      texts[activeIndex].classList.add(styles.textShow);
      if (activeIndex === data.length - 1) {
        activeIndex = 0;
      } else {
        activeIndex += 1;
      }
    }, 3000);
  }, []);

  return (
    <span className={styles.container}>
      {data.map((dt) => (
        <span key={dt} className={`main-text ${styles.text} textToChange`}>
          {dt}
        </span>
      ))}
    </span>
  );
}

export default ChangeableText;
