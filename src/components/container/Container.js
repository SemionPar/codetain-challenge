import * as React from 'react';
import styles from './Container.css';


export const Container = (props) => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
};
