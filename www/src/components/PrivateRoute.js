import React from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";

class PrivateRoute extends React.Component {

  state = {
    loading: true,
    authenticated: false
  }

  checkAuth = () => {
    const customer = localStorage.getItem('customer')
    if (!!customer) return true;
    return false;
  }

  componentDidMount() {
    const authenticated = this.checkAuth();

    this.setState({
      loading: false,
      authenticated
    })
  }

  render() {
    const { loading, authenticated } = this.state;
    const { component: Component, ...rest } = this.props;

    // if (loading) return (<Loading />);

    return (
      <Route
        {...rest}
        render={props =>
          authenticated ? (
            <Component {...props} />
          ) : (
            <Redirect from={`${props.match.path}`} to={`/user/login`} />
          )
        }
      />
    )
  }
}

export { PrivateRoute }
