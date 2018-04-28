import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login'
import Profile from './Profile'

class UserApp extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path={`${this.props.match.path}/login`} component={Login} />
          <Route path={`${this.props.match.path}/:id`} component={Profile} />
          <Redirect from={`${this.props.match.path}`} to={`/`} />
        </Switch>
      </div>
    );
  }
}

export default UserApp;
