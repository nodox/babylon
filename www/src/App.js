import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import HomeApp from './pages/home/HomeApp';
import UserApp from './pages/user/UserApp';
import { Navbar } from './components/Navbar';
import { firebaseApp } from './config/firebase'
import { AppContext } from './context/AppContext'


class App extends Component {
  state = {
    isSignedIn: undefined,
    user: undefined,
  }

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
        <Navbar />
        <Route exact path="/" component={HomeApp} />
        <Route path="/user" component={UserApp} />
      </AppContext.Provider>
    );
  }
}

export default App;
