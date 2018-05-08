import React from 'react'

import {
  FormContext,
  EmailField,
  TextField,
  FileField,
} from '../../../shared/form-wizard/FormWizard'

class ItemDetailsFieldSet extends React.Component {
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
                name="item_thumbnail_image"
                label="Thumbnail preview"
                placeholder='Thumbnail image of item'
                updateFormDataHandler={(e) => context.updateFormData(e)}
              />

              <TextField
                name="item_name"
                label="What is the name of your theme?"
                placeholder='Name'
                updateFormDataHandler={(e) => context.updateFormData(e)}
              />

              <TextField
                name="item_description"
                label="What description do you want customers to see?"
                placeholder='Description'
                updateFormDataHandler={(e) => context.updateFormData(e)}
              />

              <TextField
                name="item_demo_url"
                label="Where is the demo url?"
                placeholder='Demo url'
                updateFormDataHandler={(e) => context.updateFormData(e)}
              />

              <EmailField
                name="item_support_email"
                label="How do customers get support for your theme?"
                placeholder="Email address"
                updateFormDataHandler={(e) => context.updateFormData(e)}
              />
            </React.Fragment>
          )
        }}
      </FormContext.Consumer>
    )
  }

}
 export { ItemDetailsFieldSet }
