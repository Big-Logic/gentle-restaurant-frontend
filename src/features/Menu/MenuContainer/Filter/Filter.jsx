import CategoryFilter from "./CategoryFilter/CategoryFilter";
import styles from "./Filter.module.css";
function Filter() {
  return (
    <aside className={styles.container}>
      <CategoryFilter />
    </aside>
  );
}

export default Filter;
