import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Product from './Product'

class ThemesApp extends React.Component {

  render() {
    return (
      <div>
        <Route path={`${this.props.match.path}/:id`} component={Product} />
      </div>
    );
  }
}

export default ThemesApp;
