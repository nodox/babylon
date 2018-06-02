import React from 'react'
import validator from 'validator'
import { FormContext } from '../context'
import { ErrorList } from '../components/ErrorList'

import { Form } from 'semantic-ui-react'



class Validate extends React.Component {

  validate = e => {
    let value = e.target.value

    const isValidInput = this.props.rules.every((rule, index) => {
      const validation = validator[rule.method](value)
      const newValidations = this.props.rules
      newValidations[index]['currentState'] = validation

      this.props.handleValidation(newValidations)

      return validation === rule.desiredState
    })

    // Update formData only after the input is valid
    if (isValidInput) {
      this.props.updateFormDataHandler(e)
    }
  }

  render() {

    const shareable = {
      ...this.state,
      validate: (e) => this.validate(e)
    }

    return this.props.children(shareable)

  }
}

export { Validate };
