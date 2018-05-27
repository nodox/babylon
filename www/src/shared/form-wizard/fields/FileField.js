import React from 'react'
import validator from 'validator'
import { FormContext } from '../FormWizard'

import { Form } from 'semantic-ui-react'
import { ErrorList } from '../components/ErrorList'


class FileField extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      validations: [
        {
          field: props.name,
          method: 'isEmpty',
          desiredState: false,
          currentState: true,
          message: 'Field cannot be empty.'
        },
      ]
    }
  }

  validate = e => {
    let value = e.target.value

    const isValidInput = this.state.validations.every((rule, index) => {
      const validation = validator[rule.method](value)
      const newValidations = this.state.validations
      newValidations[index]['currentState'] = validation

      this.setState({
        validations: newValidations
      })

      return validation === rule.desiredState
    })

    // Update formData only after the input is valid
    if (isValidInput) {
      this.props.updateFormDataHandler(e)
    }
  }

  render() {
    return (
      <FormContext.Consumer>
        { (context) => {
          return (
            <React.Fragment>
              <Form.Input
                fluid
                type='file'
                name={this.props.name}
                label={this.props.label}
                onChange={(e) => this.validate(e)}
              />
              <ErrorList validations={this.state.validations} />
            </React.Fragment>
          )
        }}
      </FormContext.Consumer>
    )

  }
}

export { FileField };
