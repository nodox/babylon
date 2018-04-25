import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Reviews Id: {this.props.match.params.id}
        A review contains a star rating, a user name,
        and a short description.
      </div>
    );
  }
}

export default Reviews;
