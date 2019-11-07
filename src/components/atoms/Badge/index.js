import React from "react";

const Badge = ({ tag: Tag = "span", className, ...props }) => (
  <Tag
    className={["tag", "is-info", "is-light", className].join(" ")}
    {...props}
  />
);

export default Badge;
