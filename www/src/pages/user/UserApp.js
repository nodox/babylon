import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login'
import Profile from './Profile'
import Store from './Store'
import Orders from './Orders'

class UserApp extends React.Component {

  render() {
    return (
      <Switch>
        <Route path={`${this.props.match.path}/login`} component={Login} />
        <Route path={`${this.props.match.path}/orders`} component={Orders} />
        <Route path={`${this.props.match.path}/store`} component={Store} />
        <Route path={`${this.props.match.path}/:id`} component={Profile} />
        <Redirect from={`${this.props.match.path}`} to={`/`} />
      </Switch>
    );
  }
}

export default UserApp;
