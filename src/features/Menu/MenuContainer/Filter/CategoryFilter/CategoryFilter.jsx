import styles from "./CategoryFilter.module.css";
function CategoryFilter() {
  return (
    <form>
      <h3>Category</h3>
      <ul className={styles.items}>
        <li className={styles.item}>
          <input
            type="checkbox"
            id="burger"
            value="burger"
            className={styles.checkbox}
          />
          <label htmlFor="burger" className={styles.checkboxLabel}>
            Buger
          </label>
        </li>
      </ul>
    </form>
  );
}

export default CategoryFilter;
