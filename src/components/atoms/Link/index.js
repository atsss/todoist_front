import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styles from "./styles.module.sass";

const Link = ({ to, className, children }) => (
  <div className={className}>
    <RouterLink to={to} className={styles.link}>
      {children}
    </RouterLink>
  </div>
);

export default Link;
