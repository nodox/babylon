import React from 'react'
import {
  Form,
} from 'semantic-ui-react'

import {
  FileField,
} from '../../../shared/FormWizard'

class ItemFileFieldSet extends React.Component {
  constructor(props){
    super(props)

    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <FileField
          name="item_file"
          label="Upload your project"
        />
      </React.Fragment>
    )
  }

}

export { ItemFileFieldSet }
