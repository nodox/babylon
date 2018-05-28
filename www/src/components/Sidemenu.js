import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Menu, Sidebar } from 'semantic-ui-react'
import { firebaseApp } from '../config/firebase'
import { AppContext } from '../context/AppContext'

export class Sidemenu extends React.Component {
  handleSignOut = (e) => {
    firebaseApp.auth().signOut();
    this.props.toggleVisibility()
  }

  render() {
    const AuthenticatedMenu = () => (
      <React.Fragment>
        <Menu.Item>Gatsby Manor</Menu.Item>
        <Menu.Item as={Link} to="/">Home</Menu.Item>
        <Menu.Item as={Link} to="/user/orders">Orders</Menu.Item>
        <Menu.Item as={Link} to="/user/store">Store</Menu.Item>
        <Menu.Item as='a' onClick={this.handleSignOut}>
          Sign Out
        </Menu.Item>
      </React.Fragment>
    )

    const PublicMenu = () => (
      <React.Fragment>
        <Menu.Item>Gatsby Manor</Menu.Item>
        <Menu.Item as={Link} to="/">Home</Menu.Item>
        <Menu.Item as={Link} to="/user/login">Login</Menu.Item>
      </React.Fragment>
    )

    return (
      <Sidebar
        as={Menu}
        onClick={() => this.props.toggleVisibility()}
        animation='push'
        width='wide'
        direction='right'
        visible={this.props.visible}
        icon='labeled'
        vertical
        inverted
      >
        <AppContext.Consumer>
            {context => {
              if (!!context.user) {
                return (<AuthenticatedMenu /> )
              } else {
                return (<PublicMenu /> )
              }
            }}
        </AppContext.Consumer>
      </Sidebar>

    )
  }

}
