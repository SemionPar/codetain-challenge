import * as React from 'react';
import styles from './Main.css';


export const Main = (props) => {
  return (
    <div className={styles.mainSection}>
      {props.children}
    </div>
  );
};
