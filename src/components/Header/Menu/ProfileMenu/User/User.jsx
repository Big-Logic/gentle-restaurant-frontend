import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// COMPONENTS
// import Button from "../../buttton/Button";
// import { useUser } from "../../../../contexts/AuthContext";
// import LogoutButton from "./LogoutButton";

// CSS STYLES
import styles from "./User.module.css";

const profileDefault =
  "https://res.cloudinary.com/dy287fhyg/image/upload/v1699014386/profiledefault_qie9w2.webp";
function User({ url }) {
  const [optionDisplay, setOptionDisplay] = useState(false);

  function handleClick(e) {
    e.stopPropagation();
    setOptionDisplay((prev) => !prev);
  }
  return (
    <div className={styles.container}>
      <button className={styles.userBtn} onClick={handleClick}>
        <div className={styles.userImageContainer}>
          <img
            src={url || profileDefault}
            alt="User"
            className={styles.userImage}
          />
        </div>
        <span
          className={`${styles.arrowDown} ${
            optionDisplay ? styles.arrowDownRotate : ""
          }`}
        >
          <i className="las la-angle-down"></i>
        </span>
      </button>
      <div
        className={`${styles.dropdown} ${
          optionDisplay ? styles.dropdownShow : ""
        }`}
      >
        <a href="#" className={styles.dropdownBtn}>
          <i className={`las la-user-alt ${styles.dropdownIcon}`}></i>
          <span>profile</span>
        </a>
        <a href="#" className={styles.dropdownBtn}>
          <i className={`las la-cog ${styles.dropdownIcon}`}></i>
          <span>setting</span>
        </a>
        {/* <LogoutButton /> */}
      </div>
    </div>
  );
}

export default User;
