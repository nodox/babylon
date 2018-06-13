import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Menu, Sidebar } from "semantic-ui-react";
import { AppContext } from "../context/AppContext";

export class Sidemenu extends React.Component {
  render() {
    const AuthenticatedMenu = ({ context }) => (
      <React.Fragment>
        <Menu.Item>Gatsby Manor</Menu.Item>
        <Menu.Item as={Link} to="/">
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/user/orders">
          Orders
        </Menu.Item>
        <Menu.Item as={Link} to="/user/store">
          Store
        </Menu.Item>
        <Menu.Item as="a" onClick={() => context.logout()}>
          Sign Out
        </Menu.Item>
      </React.Fragment>
    );

    const PublicMenu = () => (
      <React.Fragment>
        <Menu.Item>Gatsby Manor</Menu.Item>
        <Menu.Item as={Link} to="/">
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/login">
          Login
        </Menu.Item>
      </React.Fragment>
    );

    return (
      <Sidebar
        as={Menu}
        onClick={() => this.props.toggleVisibility()}
        animation="push"
        width="wide"
        direction="right"
        visible={this.props.visible}
        icon="labeled"
        vertical
        inverted
      >
        <AppContext.Consumer>
          {context => {
            if (!!context.customer) {
              return <AuthenticatedMenu context={context} />;
            } else {
              return <PublicMenu />;
            }
          }}
        </AppContext.Consumer>
      </Sidebar>
    );
  }
}
