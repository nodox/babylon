import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { AppContext } from "../context/AppContext";

export class Navbar extends React.Component {
  render() {
    const AuthenticatedMenu = () => (
      <Menu inverted>
        <Menu.Item>Gatsby Manor</Menu.Item>
        <Menu.Item as={Link} to="/">
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/user/profile">
          Profile
        </Menu.Item>
        <Menu.Item as="a" onClick={this.handleSignOut}>
          Sign Out
        </Menu.Item>
      </Menu>
    );

    const PublicMenu = () => (
      <Menu inverted>
        <Menu.Item>Gatsby Manor</Menu.Item>
        <Menu.Item as={Link} to="/">
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/user/login">
          Login
        </Menu.Item>
      </Menu>
    );

    return (
      <AppContext.Consumer>
        {context => {
          if (!!context.user) {
            return <AuthenticatedMenu />;
          } else {
            return <PublicMenu />;
          }
        }}
      </AppContext.Consumer>
    );
  }
}
