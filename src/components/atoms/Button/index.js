import React from "react";
import PropTypes from "prop-types";
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

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};
