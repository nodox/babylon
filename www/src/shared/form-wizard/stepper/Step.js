import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Previous } from '../buttons/Previous'
import { Next } from '../buttons/Next'
import { Submit } from '../buttons/Submit'

class Step extends React.Component {

  render() {
    const {
      isActive,
      displayPrevious,
      displayNext,
      displaySubmit,
    } = this.props

    if (isActive) {
      return (
        <React.Fragment>
          {this.props.render()}
          <Grid centered>
            <Grid.Row>
              <Previous
                isActive={displayPrevious}
                goToPreviousStep={() => this.props.goToPreviousStep()}
              />
              <Next
                isActive={displayNext}
                goToNextStep={() => this.props.goToNextStep()}
              />
              <Submit
                isActive={displaySubmit}
              />
            </Grid.Row>
          </Grid>
        </React.Fragment>
      )
    }

    return null
  }
}

export { Step }
