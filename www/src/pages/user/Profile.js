import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        Profile Id: {this.props.match.params.id}
      </div>
    );
  }
}

export default Profile;
