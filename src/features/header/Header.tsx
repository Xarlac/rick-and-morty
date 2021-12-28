import { FC } from "react";
import styles from "./Header.module.scss";
import strings from '../../assets/strings.json'

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <h1>{strings.RickAndMort}</h1>
    </div>
  );
};
