import * as React from 'react';
import styles from './Navbar.css';
import {NavLink} from 'react-router-dom';

export const Navbar = (props) => {
  return (
    <ul className={styles.navbar}>
      <li className={styles.navitem}><NavLink to='/home' activeClassName={styles.active}>Home</NavLink></li>
      <li className={styles.navitem}><NavLink to='/status' activeClassName={styles.active}>Status</NavLink></li>
    </ul>
  );
};
