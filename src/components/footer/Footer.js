import * as React from 'react';
import styles from './Footer.css';

export const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <p className={styles.footerText}>All rights reserved... or not.</p>
    </div>
  );
};
