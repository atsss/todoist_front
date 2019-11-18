import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.sass";
import { containerPresenter } from "../../utils/HoC.js";

export const HeadingPresenter = ({
  tag: Tag,
  visualLevel,
  className,
  children,
  ...props
}) => (
  <Tag
    className={[styles.h, styles[`h${visualLevel}`], className].join(" ")}
    {...props}
  >
    {children}
  </Tag>
);

export const HeadingContainer = ({
  presenter,
  level = 2,
  visualLevel,
  ...props
}) => {
  level = Math.max(1, Math.min(6, level));
  visualLevel = typeof visualLevel !== "undefined" ? visualLevel : level;
  const tag = `h${level}`;

  return presenter({ tag, visualLevel, ...props });
};

const Heading = containerPresenter(HeadingContainer, HeadingPresenter);

export default Heading;

Heading.propTypes = {
  level: PropTypes.number,
  visualLevel: PropTypes.number,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
