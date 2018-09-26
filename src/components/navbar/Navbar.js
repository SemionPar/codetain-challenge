import * as React from 'react';
import styles from './Navbar.css';

export const Navbar = (props) => {
  return (
    <ul>
      <li className={styles.logo}><a href="#home">Logo</a></li>
      <li className={styles.items}><a href="#home">Home</a></li>
      <li className={styles.items}><a href="#status">Status</a></li>
    </ul>
  );
};
