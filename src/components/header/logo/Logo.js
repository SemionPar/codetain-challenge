import * as React from 'react';
import styles from './Logo.css';

export const Logo = (props) => {
  return (
    <div className={styles.logoContainer}>
      <a href="/"><img className={styles.logo} src='/codetain_logo_dark_small.png'/></a>
    </div>
  );
};
