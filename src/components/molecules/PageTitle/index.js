import React from "react";
import styles from "./styles.module.sass";
import Heading from "../../atoms/Heading";
import { SubTxt } from "../../atoms/Txt";

const PageTitle = ({ title, sub, className }) => (
  <div className={[styles.root, className].join(" ")}>
    <Heading>{title}</Heading>
    <SubTxt size="s" className="u-ml5">
      {sub}
    </SubTxt>
  </div>
);

export default PageTitle;
