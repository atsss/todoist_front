import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.sass";
import { containerPresenter } from "../../utils/HoC.js";

export const LayoutPresenter = ({
  tag: Tag = "div",
  parts,
  className,
  ...props
}) => {
  const { main, side } = parts;
  return (
    <Tag className={[styles.root, className].join(" ")}>
      <nav className={styles.nav}>{side}</nav>
      <main className={styles.main}>{main}</main>
    </Tag>
  );
};

export const LayoutContainer = ({ presenter, children, ...props }) => {
  const parts = mapParts(children);
  return presenter({ parts, ...props });
};

const Layout = containerPresenter(LayoutContainer, LayoutPresenter);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

const partTypes = ["GridMain", "GridSide"];

export const GridMain = () => <div>これはレンダリングされないもの</div>;
export const GridSide = () => <div>これはレンダリングされないもの</div>;

const mapParts = elems => {
  const parts = [];
  elems.map(elem => {
    const idx = partTypes.indexOf(elem.type.name); // displayName => name
    if (!~idx) return false;
    parts[idx] = elem.props.children;
    return true;
  });
  const [main, side] = parts;
  return { main, side };
};
