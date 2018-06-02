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
      component,
      children,
    } = this.props

    if (isActive) {
      const NavSection = () => (
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
      )

      if (component) {
        return (
          <React.Fragment>
            {React.createElement(component)}
            <NavSection />
          </React.Fragment>
        )
      }

      if (children) {
        return (
          <React.Fragment>
            {children}
            <NavSection />
          </React.Fragment>
        )
      }
    }

    return null
  }
}

export { Step }
