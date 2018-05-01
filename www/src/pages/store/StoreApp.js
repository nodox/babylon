import React from 'react';
import { Link, Route } from 'react-router-dom';
import Items from './Items';
import ItemsDetail from './ItemsDetail';


class StoreApp extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path={`${this.props.match.path}/`} component={Items} />
        <Route path={`${this.props.match.path}/items/:id`} component={ItemsDetail} />
      </React.Fragment>
    );
  }
}

export default StoreApp;
