import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './ChargingDevice.css';

export const ChargingDevice = (props) => {

  const chargingIndicatorStyle = classNames({
    [props.currentPower > 0 ? styles.charging : styles.notCharging]: true,
    [styles.prioritized]: props.isPrioritized
  });

  return (
    <div>
      <div className={chargingIndicatorStyle} onClick={_ => props.onPriorityChange(props.id)}>
        <img src={props.icon} className={styles.connectedDevice}/>
      </div>
      <p className={styles.connectedDeviceText}>{props.currentPower}kW</p>
    </div>
  );
};

ChargingDevice.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  currentPower: PropTypes.number.isRequired,
  isPrioritized: PropTypes.bool.isRequired,
  onPriorityChange: PropTypes.func.isRequired,
};
