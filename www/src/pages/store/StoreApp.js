import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Items from './Items';
import ItemsDetail from './ItemsDetail';
import Upload from './Upload';


class StoreApp extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path={`${this.props.match.path}/`} component={Items} />
        <Route path={`${this.props.match.path}/items/new`} component={Upload} />
        <Route path={`${this.props.match.path}/items/:id`} component={ItemsDetail} />
      </Switch>
    );
  }
}

export default StoreApp;
