import * as React from 'react';
import styles from './Hero.css';

export const Hero = (props) => {
  return (
    <div className={styles.heroImage}>
        <h1 className={styles.heroText}>
          POWER SOURCE
        </h1>
    </div>
  );
};
