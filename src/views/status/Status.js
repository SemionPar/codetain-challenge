import * as React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './Status.css';
import {TotalPower} from './totalPower/TotalPower';
import {ChargingDevice} from './chargingDevice/ChargingDevice';
import Error from '../../components/error/Error';


export class Status extends React.Component {

  handleDevicePriorityChange = (deviceId) => {
    this.setState(prevStat => ({
        prioritizedId: prevStat.prioritizedId === deviceId ? null : deviceId
      }
    ));
  };

  fetchChargingStatus = () => {
    axios.get(this.props.apiUrl, {
      params: {
        priority: this.state.prioritizedId
      }
    })
      .then(response => {
        const chargingStatus = response.data.charging_status;
        this.setState({
          error: false,
          chargingStatus: chargingStatus
        });
      })
      .catch(error => this.setState({error: true}))
  };

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      prioritizedId: null,
      chargingStatus: {}
    };
  }

  componentDidMount() {
    this.fetchChargingStatus();
    this.interval = setInterval(() => this.fetchChargingStatus(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {devices} = this.props;
    const {chargingStatus} = this.state;
    const chargingDevices = devices.map((device) =>
      <div className={styles.column} key={device.id}>
        <ChargingDevice icon={device.icon}
                        currentPower={chargingStatus[device.id] | 0}
                        id={device.id}
                        isPrioritized={this.state.prioritizedId === device.id}
                        onPriorityChange={this.handleDevicePriorityChange}/>
      </div>
    );

    const totalPower = devices.map(device => {
      return Object.keys(chargingStatus).length === 0 ? 0 : chargingStatus[device.id];
    })
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return (
      this.state.error ? <Error/> :
        <div>
          <TotalPower totalPower={totalPower}/>
          <div className={styles.row}>
            {chargingDevices}
          </div>
        </div>
    )
  }
}

Status.propTypes = {
  devices: PropTypes.array.isRequired,
  apiUrl: PropTypes.string.isRequired,
};
