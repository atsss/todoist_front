import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.sass";

const txtFactory = role => ({
  tag: Tag = "p",
  size = "m",
  weight = "normal",
  className,
  children,
  ...props
}) => (
  <Tag
    className={[styles[role], styles[size], styles[weight], className].join(
      " "
    )}
    {...props}
  >
    {children}
  </Tag>
);

const Txt = txtFactory("default");
export default Txt;

export const SubTxt = txtFactory("sub");
export const WhiteTxt = txtFactory("white");
export const WarningTxt = txtFactory("warning");

Txt.propTypes = SubTxt.propTypes = WhiteTxt.propTypes = WarningTxt.propTypes = {
  tag: PropTypes.string,
  size: PropTypes.string,
  wight: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
