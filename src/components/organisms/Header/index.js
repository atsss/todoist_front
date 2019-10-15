import React from "react";
import styles from "./styles.module.sass";
import { WhiteTxt } from "../../atoms/Txt";

const Header = props => (
  <header className={styles.root} {...props}>
    <div className={styles.container}>
      <h1>
        <WhiteTxt weight="bold">Todoist</WhiteTxt>
      </h1>
    </div>
  </header>
);

export default Header;
