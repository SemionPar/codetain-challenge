import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './TotalPower.css';

export const TotalPower = (props) => {
  return (
    <div className={styles.row}>
      <h1 className={styles.totalPowerText}>Total Power: {props.totalPower}kW</h1>
    </div>
  );
};

TotalPower.propTypes = {
  totalPower: PropTypes.number.isRequired,
};
