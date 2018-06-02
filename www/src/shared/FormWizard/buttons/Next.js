import React from 'react'
import {
  Button,
} from 'semantic-ui-react'

class Next extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isActive } = this.props
    if (isActive) {
      return (
        <Button onClick={() => this.props.goToNextStep()} color='green' size='large'>
          Next
        </Button>
      )
    }
    return null
  }
}

export { Next }
