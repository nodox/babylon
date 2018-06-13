import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Profile from "./Profile";
import Orders from "./Orders";
import { PrivateRoute } from "../../components/PrivateRoute"

class UserApp extends React.Component {
  render() {
    return (
      <Switch>
        <PrivateRoute path={`${this.props.match.path}/orders`} component={Orders} />
        <PrivateRoute path={`${this.props.match.path}/:id`} component={Profile} />
        <Redirect from={`${this.props.match.path}`} to={`/`} />
      </Switch>
    );
  }
}

export default UserApp;
