import React from "react";
import PropTypes from "prop-types";

const Badge = ({ tag: Tag = "span", className, children, ...props }) => (
  <Tag
    className={["tag", "is-info", "is-light", className].join(" ")}
    {...props}
  >
    {children}
  </Tag>
);

export default Badge;

Badge.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
