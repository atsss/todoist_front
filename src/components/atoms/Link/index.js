import React from "react";
import PropTypes from "prop-types";
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

Link.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
