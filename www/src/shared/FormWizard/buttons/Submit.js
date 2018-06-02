import React from 'react'
import {
  Button,
} from 'semantic-ui-react'

class Submit extends React.Component {

  render() {
    if (this.props.isActive) {
      return (
        <Button type='submit' color='blue' size='large'>
          Submit
        </Button>
      )
    }
    return null
  }
}

export { Submit }
