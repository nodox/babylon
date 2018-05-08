import React from 'react'
import {
  Form,
} from 'semantic-ui-react'

import {
  FormContext,
  FileField,
} from '../../../shared/form-wizard/FormWizard'

class ItemFileFieldSet extends React.Component {
  constructor(props){
    super(props)

    this.state = {}
  }

  render() {
    return (
      <FormContext.Consumer>
        {(context) => {
          return (
            <React.Fragment>
              <FileField
                name="item_file"
                label="Upload your project"
                updateFormDataHandler={(e) => context.updateFormData(e)}
              />
            </React.Fragment>
          )
        }}
      </FormContext.Consumer>

    )
  }

}

export { ItemFileFieldSet }
