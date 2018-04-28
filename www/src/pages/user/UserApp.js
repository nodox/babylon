import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login'

class UserApp extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path={`${this.props.match.path}/login`} component={Login} />
          <Redirect from={`${this.props.match.path}`} to={`/`} />
        </Switch>
      </div>
    );
  }
}

export default UserApp;
