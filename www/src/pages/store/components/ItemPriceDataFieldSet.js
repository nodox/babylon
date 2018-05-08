import React from 'react'

import {
  FormContext,
  NumberField,
} from '../../../shared/form-wizard/FormWizard'

class ItemPriceDataFieldSet extends React.Component {
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
              <NumberField
                name="item_standard_price"
                label="What standard price do you want to set?"
                placeholder='Standard Price'
                updateFormDataHandler={(e) => context.updateFormData(e)}
              />

              <NumberField
                name="item_commercial_price"
                label="What commercial price do you want to set?"
                placeholder='Commercial Price'
                updateFormDataHandler={(e) => context.updateFormData(e)}
              />
            </React.Fragment>

          )
        }}
      </FormContext.Consumer>
    )
  }

}
 export { ItemPriceDataFieldSet }
