import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import Home from './Home';

// helpful routing tutorial
// https://www.sitepoint.com/react-router-v4-complete-guide/
// https://css-tricks.com/react-router-4/
// https://github.com/pillarjs/path-to-regexp#custom-match-parameters
const MerchantLogin = () => (
  <div>
    <h2>Merchant Login</h2>
  </div>
)

const MerchantSignup = () => (
  <div>
    <h2>Merchant Signup</h2>
  </div>
)

const MerchantShop = (props) => {
  console.log(props);

  return (
    <div>
      <h2>Merchant Shop {props.match.params.id}</h2>
    </div>
  )
}

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
            <Link to="/merchant/login">Login</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/merchant/signup">Signup</Link>
          </Menu.Item>
        </Menu>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/merchant/login" component={MerchantLogin} />
          <Route path="/merchant/signup" component={MerchantSignup} />
          <Route path="/merchant/:id" component={MerchantShop} />
        </Switch>
      </div>
    );
  }
}

export default App;
