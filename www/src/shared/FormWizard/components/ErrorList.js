import React from "react";
import styled from "styled-components";
import { Message } from "semantic-ui-react";

class ErrorList extends React.Component {
  render() {
    const errors = this.props.validations.map((rule, idx) => {
      const isInvalidInput = rule.currentState !== rule.desiredState;
      if (isInvalidInput) {
        return (
          <Message key={idx} negative>
            {rule.message}
          </Message>
        );
      }
    });

    return errors;
  }
}

export { ErrorList };
