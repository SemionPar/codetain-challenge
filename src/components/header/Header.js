import * as React from 'react';
import styles from './Header.css';
import {Logo} from './logo/Logo';
import {Navbar} from './navbar/Navbar';


export const Header = (props) => {
  return (
    <div className={styles.header}>
      <Logo/>
      <Navbar/>
    </div>
  );
};
