import React from 'react';
import { Form, Button } from 'semantic-ui-react'

import { FormContext } from './FormContext'

import { StepList } from './stepper/StepList'
import { Step } from './stepper/Step'

import { EmailField } from './fields/EmailField'
import { FileField } from './fields/FileField'
import { NumberField } from './fields/NumberField'
import { TextField } from './fields/TextField'

class FormWizard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      submitted: false,

      formData: {},
    }

  }

  handleFormInputChange = event => {
    event.preventDefault();

    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value,
      }
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();

    console.log(this.state.formData);
  }

  render() {
    const children = React.Children.map(this.props.children, (child, index) => {
      return child
    })

    const store = {
      ...this.state,
      updateFormData: (e) =>  this.handleFormInputChange(e),
    }

    return (
      <FormContext.Provider value={store}>
        <Form as={this.props.as} size='large' onSubmit={(e) => this.handleFormSubmit(e)}>
          <StepList>
            {children}
          </StepList>
        </Form>
      </FormContext.Provider>
    );
  }
}


export {
  FormContext,
  FormWizard,
  Step,
  EmailField,
  NumberField,
  TextField,
  FileField,
 }
