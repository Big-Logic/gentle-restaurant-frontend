import SearchBar from "../../../../reusables/SearchBar/SearchBar";
import MenuItemsContainer from "./MenuItemsContainer/MenuItemsContainer";
import styles from "./MenuMain.module.css";
function MenuMain() {
  return (
    <main className={styles.container}>
      <SearchBar />
      <MenuItemsContainer />
    </main>
  );
}

export default MenuMain;
