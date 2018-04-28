import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import { firebaseApp } from '../config/firebase'
import { AppContext } from '../context/AppContext'

export class Navbar extends React.Component {
  handleSignOut = (e) => {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <Menu inverted>
            <Menu.Item>Gatsby Manor</Menu.Item>
            <Menu.Item>
              <Link to="/">Home</Link>
            </Menu.Item>
            {!context.user ? (
              <Menu.Item>
                <Link to="/user/login">Login</Link>
              </Menu.Item>
            ) : (
              <Menu.Item as='a' onClick={this.handleSignOut}>
                Sign Out
              </Menu.Item>
            )}
          </Menu>
        )}
      </AppContext.Consumer>
    )
  }

}
