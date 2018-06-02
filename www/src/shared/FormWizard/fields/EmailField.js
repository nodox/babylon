import React from 'react'
import validator from 'validator'
import { FormContext } from '../context'
import { ErrorList } from '../components/ErrorList'
import { Validate } from '../components/Validate'

import { Form } from 'semantic-ui-react'



class EmailField extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      validations: [
        {
          field: props.name,
          method: 'isEmpty',
          desiredState: false,
          currentState: true,
          message: 'Email cannot be empty.'
        },
        {
          field: props.name,
          method: 'isEmail',
          desiredState: true,
          currentState: false,
          message: 'Email needs to be valid.'
        },
      ]
    }
  }

  updateValidationState = newValidations => {
    this.setState({
      validations: newValidations
    })
  }

  render() {
    return (
      <FormContext.Consumer>
        { (context) => {
          return (
            <React.Fragment>
              <Validate
                rules={this.state.validations}
                handleValidation={this.updateValidationState}
                updateFormDataHandler={(e) => context.updateFormData(e)}>
                {validateContext => {
                  return (
                    <React.Fragment>
                      <Form.Input
                        fluid
                        type='email'
                        name={this.props.name}
                        label={this.props.label}
                        placeholder={this.props.placeholder}
                        onChange={(e) => validateContext.validate(e)}
                      />
                      <ErrorList validations={this.state.validations} />
                    </React.Fragment>
                  )
                }}
              </Validate>
            </React.Fragment>
          )
        }}
      </FormContext.Consumer>
    )

  }
}

export { EmailField };
