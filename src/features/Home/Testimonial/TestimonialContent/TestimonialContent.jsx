import styles from "./TestimonialContent.module.css";
function TestimonialContent({ testimonial }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="./user1.jpg" alt="User Image" className={styles.image} />
      </div>
      <div>
        <p className={styles.mainMessage}>I love the burgers</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad et
          exercitationem necessitatibus
        </p>
        <p className={styles.userName}>@Big Logic</p>
      </div>
    </div>
  );
}

export default TestimonialContent;
