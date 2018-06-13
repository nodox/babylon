import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./Login";


class AuthApp extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path={`${this.props.match.path}/login`} component={Login} />
        <Redirect from={`${this.props.match.path}`} to={`/`} />
      </Switch>
    );
  }
}

export default AuthApp;
