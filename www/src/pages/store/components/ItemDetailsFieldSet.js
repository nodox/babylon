import React from 'react'

import {
  EmailField,
  TextField,
  FileField,
} from '../../../shared/FormWizard'

class ItemDetailsFieldSet extends React.Component {
  constructor(props){
    super(props)

    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <FileField
          name="item_thumbnail_image"
          label="Thumbnail preview"
          placeholder='Thumbnail image of item'
        />

        <TextField
          name="item_name"
          label="What is the name of your theme?"
          placeholder='Name'
        />

        <TextField
          name="item_description"
          label="What description do you want customers to see?"
          placeholder='Description'
        />

        <TextField
          name="item_demo_url"
          label="Where is the demo url?"
          placeholder='Demo url'
        />

        <EmailField
          name="item_support_email"
          label="How do customers get support for your theme?"
          placeholder="Email address"
        />
      </React.Fragment>
    )
  }
}
 export { ItemDetailsFieldSet }
