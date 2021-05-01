import React from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Header = () => {


  return (
    <header className={styles.contents}>
      <div>
        <FontAwesomeIcon icon="book" size="3x" />
      </div>
     <h1>Book Cards</h1>
    </header>
  );
};

export default Header;
