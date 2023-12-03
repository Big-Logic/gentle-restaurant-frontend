import MainSection from "../../../reusables/MainSection/MainSection";
import Filter from "./Filter/Filter";
import MenuMain from "./MenuMain/MenuMain";
import styles from "./MenuContainer.module.css";
function MenuContainer() {
  return (
    <MainSection>
      <div className={styles.container}>
        <Filter />
        <MenuMain />
      </div>
    </MainSection>
  );
}

export default MenuContainer;
