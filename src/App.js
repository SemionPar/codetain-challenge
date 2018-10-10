import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Home} from './views/Home';
import {Status} from './views/status/Status';
import {Footer} from './components/footer/Footer';
import {Header} from './components/header/Header';
import {Container} from './components/container/Container';
import {Main} from './components/main/Main';
import ErrorBoundaryComponentWrapper from './views/ErrorBoundaryComponentWrapper';
import {API_URL, DEVICES} from './constants';


class App extends Component {
  render() {
    const WrappedStatus = ErrorBoundaryComponentWrapper(Status);
    return (
      <Container>
        <Header/>
        <Switch>
          <Main>
            <Route path="/home" component={ErrorBoundaryComponentWrapper(Home)}/>
            <Route path="/status" render={(props) => <WrappedStatus devices={DEVICES}
                                                                    apiUrl={API_URL} {...props}/>}/>
            <Redirect to="/home"/>
          </Main>
        </Switch>
        <Footer/>
      </Container>
    );
  }
}

export default App;
