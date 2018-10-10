import * as React from 'react';
import styles from './Error.css';

export const Error = (props) => {
  return (
    <div className={styles.errorText}>
      <h1>Oops!</h1>
      <h4>It looks like the force is weak with this one.</h4>
      <p>Please try again later.</p>
    </div>
  );
};

export default Error;
