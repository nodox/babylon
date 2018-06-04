import React from "react";
import { Button } from "semantic-ui-react";

class Previous extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isActive } = this.props;
    if (isActive) {
      return (
        <Button
          onClick={() => this.props.goToPreviousStep()}
          color="red"
          size="large"
        >
          Previous
        </Button>
      );
    }
    return null;
  }
}

export { Previous };
