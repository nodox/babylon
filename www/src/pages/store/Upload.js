import React from 'react';
import { Link, Route } from 'react-router-dom';
import daniel from './daniel.jpg';

import {
  Grid,
  Header,
  Form,
  Label,
  Image,
  Divider,
  Input,
  Button,
  Segment,
} from 'semantic-ui-react'


const themes = [
  'Massively',
  'Stellar',
  'Photon',
]


class Upload extends React.Component {

  render() {
    return (
      <div>
        <Grid celled='internally' columns='equal' stackable>

          <Grid.Row textAlign='center'>
            <Grid.Column>
              <Header as='h1'>
                Upload Item Details

              </Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>

              <Form size='large'>
                <Segment>
                  <Form.Input
                    fluid
                    type="file"
                    label="Thumbnail preview"
                  />

                  <Form.Input
                    fluid
                    type="file"
                    multiple
                    label="Upload your theme project"
                  />

                  <Form.Input
                    fluid
                    label="What is the name of your theme?"
                    placeholder='Name'
                  />

                  <Form.Input
                    fluid
                    label="What description do you want customers to see?"
                    placeholder='Description'
                  />

                  <Form.Input
                    fluid
                    label="What standard price do you want to set?"
                    placeholder='Standard Price'
                  />

                  <Form.Input
                    fluid
                    label="What commercial price do you want to set?"
                    placeholder='Commercial Price'
                  />

                  <Form.Input
                    fluid
                    label="Where is the demo url?"
                    placeholder='Demo url'
                  />

                  <Form.Input
                    fluid
                    label="How do customers get support for your theme?"
                    placeholder='email'
                  />

                  <Form.Field label='What license will you use?' control='select'>
                    <option value='standard'>Gatsby Manor Standard</option>
                    <option value='commercial'>Gatsby Manor Commercial</option>
                    <option value='custom'>I will provide my own license</option>
                  </Form.Field>

                  <Button color='blue' fluid size='large'>Submit</Button>
                </Segment>
              </Form>

            </Grid.Column>
          </Grid.Row>

        </Grid>
      </div>
    );
  }
}

export default Upload;
