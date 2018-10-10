import React, {Component} from 'react';
import Error from '../components/error/Error';

const ErrorBoundaryComponentWrapper = (WrappedComponent) => {
  return class Wrapper extends Component {

    constructor(props, context) {
      super(props, context);
      this.state = {
        error: null
      }
    }

    componentDidCatch(error, errorInfo) {
      this.setState(() => ({error: error}))
    }

    render() {
      return (
        this.state.error ? <Error/> : <WrappedComponent {...this.props}/>
      );
    }
  };
};

export default ErrorBoundaryComponentWrapper
