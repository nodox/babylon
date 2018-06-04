import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Details Id: {this.props.match.params.id}
        Here we list the details of the product The intro, best use cases, code
        quality, etc.
      </div>
    );
  }
}

export default Details;
