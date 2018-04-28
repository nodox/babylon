import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Segment } from 'semantic-ui-react'

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Segment>Hello world! I left a comment.</Segment>
      </div>
    );
  }
}

export default Reviews;
