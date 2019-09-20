import React from "react";
import styles from "./styles.module.sass";
import { WhiteTxt } from "../../atoms/Txt";

const Button = ({ text, onClick, className }) => (
  <button
    className={[styles.button, className].join(" ")}
    onClick={e => onClick(e)}
  >
    <WhiteTxt weight="bold">{text}</WhiteTxt>
  </button>
);

export default Button;
