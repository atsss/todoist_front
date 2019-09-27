import React, { useState } from "react";
import styles from "./styles.module.sass";
import Link from "../../atoms/Link";
import Txt from "../../atoms/Txt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { containerPresenter } from "../../utils/HoC.js";

const SettingsPresenter = ({ id, isDisplay, toggle, className }) => (
  <div className={[styles.root, className].join(" ")}>
    <FontAwesomeIcon
      className={styles.icon}
      icon={faEllipsisH}
      onClick={toggle}
    />
    <ul
      className={
        isDisplay ? [styles.menu, styles.active].join(" ") : styles.menu
      }
    >
      <li>
        <Link to={`/tasks/${id}/edit`}>
          <Txt>タスクを編集</Txt>
        </Link>
      </li>
      <li>
        <Link to={`/tasks/${id}/edit`}>
          <Txt className="u-mt10">タスクを削除</Txt>
        </Link>
      </li>
    </ul>
  </div>
);

const SettingsContainer = ({ presenter, ...props }) => {
  const [isDisplay, setIsDisplay] = useState(false);
  const toggle = () => setIsDisplay(!isDisplay);

  return presenter({ isDisplay, toggle, ...props });
};

const Settings = containerPresenter(SettingsContainer, SettingsPresenter);

export default Settings;
