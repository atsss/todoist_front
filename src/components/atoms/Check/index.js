import React from "react";
import styles from "./styles.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Check = ({ className }) => (
  <div className={[styles.root, className].join(" ")}>
    <FontAwesomeIcon icon={faCheck} />
  </div>
);

export default Check;
