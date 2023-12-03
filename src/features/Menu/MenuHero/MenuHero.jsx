import Breadcrum from "../../../reusables/Breadcrum/Breadcrum";
import MainSection from "../../../reusables/MainSection/MainSection";

import styles from "./MenuHero.module.css";

const brc = [
  { link: "/home", title: "Home" },
  { link: "/menu", title: "Menu" },
];
function MenuHero() {
  return (
    <MainSection customClass={styles.section}>
      <Breadcrum data={brc} />
    </MainSection>
  );
}

export default MenuHero;
