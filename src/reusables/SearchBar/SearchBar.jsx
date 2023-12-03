import { useState } from "react";
import styles from "./SearchBar.module.css";
function SearchBar({ customClass, handlerFunction }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue) return;
    handlerFunction(inputValue);
    setInputValue("");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.container} ${customClass}`}
    >
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Search any food"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.btnContainer}>
        <button type="submit" className={styles.btn}>
          <i className="las la-search"></i>
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
