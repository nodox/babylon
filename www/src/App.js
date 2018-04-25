import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import HomeApp from './pages/home/HomeApp';
import UserApp from './pages/user/UserApp';


// helpful routing tutorial
// https://www.sitepoint.com/react-router-v4-complete-guide/
// https://css-tricks.com/react-router-4/
// https://github.com/pillarjs/path-to-regexp#custom-match-parameters

class App extends Component {
  render() {
    return (
      <div>
        <Menu inverted>
          <Menu.Item>Gatsby Manor</Menu.Item>
          <Menu.Item>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/user/login">Login</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/user/signup">Signup</Link>
          </Menu.Item>
        </Menu>

        <Route exact path="/" component={HomeApp} />
        <Route path="/user" component={UserApp} />
      </div>
    );
  }
}

export default App;
