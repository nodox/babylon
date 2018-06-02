import React from 'react'

import {
  NumberField,
} from '../../../shared/FormWizard'

class ItemPriceDataFieldSet extends React.Component {
  constructor(props){
    super(props)

    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <NumberField
          name="item_standard_price"
          label="What standard price do you want to set?"
          placeholder='Standard Price'
        />

        <NumberField
          name="item_commercial_price"
          label="What commercial price do you want to set?"
          placeholder='Commercial Price'
        />
      </React.Fragment>
    )
  }

}
 export { ItemPriceDataFieldSet }
