import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Menu, Sidebar, Icon } from 'semantic-ui-react'
import { Navbar } from './components/Navbar';
import { firebaseApp } from './config/firebase'
import { AppContext } from './context/AppContext'

import HomeApp from './pages/home/HomeApp';
import UserApp from './pages/user/UserApp';
import ThemesApp from './pages/themes/ThemesApp';
import { Sidemenu } from './components/Sidemenu';
import StyledPushable from './components/StyledPushable';


// helpful routing tutorial
// https://www.sitepoint.com/react-router-v4-complete-guide/
// https://css-tricks.com/react-router-4/
// https://github.com/pillarjs/path-to-regexp#custom-match-parameters

class App extends Component {
  state = {
    isSignedIn: undefined,
    user: undefined,
    visible: false,
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  componentDidMount() {
    this.unregisterAuthObserver = firebaseApp.auth().onAuthStateChanged((user) => {
      this.setState({
        isSignedIn: !!user,
        user: user,
      });
    });
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Sidebar.Pushable as={StyledPushable}>
          <Sidemenu visible={this.state.visible} />
          <Sidebar.Pusher>
            <Menu inverted>
              <Menu.Item>Gatsby Manor</Menu.Item>
              <Menu.Item  position="right" onClick={this.toggleVisibility}>
                <Icon name="sidebar" />
              </Menu.Item>
            </Menu>
            <Route exact path="/" component={HomeApp} />
            <Route path="/user" component={UserApp} />
            <Route path="/themes" component={ThemesApp} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>

      </AppContext.Provider>
    );
  }
}

export default App;
