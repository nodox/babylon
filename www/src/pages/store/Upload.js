import React from 'react';
import { Link, Route } from 'react-router-dom';
import daniel from './daniel.jpg';
import validator from 'validator';

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

import { FormWizard, Step, FileField } from '../../shared/FormWizard'


import { ItemDetailsFieldSet } from './components/ItemDetailsFieldSet'
import { ItemFileFieldSet } from './components/ItemFileFieldSet'
import { ItemPriceDataFieldSet } from './components/ItemPriceDataFieldSet'

import { media } from './media'
import styled from 'styled-components';

const StyledForm = styled(Form)`

  ${media.medium`
    width: 50%;
    margin: auto;
  `}
`;


class Upload extends React.Component {

  handleFormSubmit = (data) => {
    console.log('formdata', data);
  }

  render() {
    return (
      <div>
        <Grid celled='internally' columns='equal' stackable>

          <Grid.Row textAlign='center'>
            <Grid.Column>
              <Header as='h1'>
                Upload Item
              </Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>

              <FormWizard
                as={StyledForm}
                handleFormSubmit={this.handleFormSubmit}>
                <Step>
                  <FileField
                    name="item_file"
                    label="Upload your project"
                  />
                </Step>
                <Step component={ItemDetailsFieldSet} />
                <Step component={ItemPriceDataFieldSet} />
              </FormWizard>

            </Grid.Column>
          </Grid.Row>

        </Grid>
      </div>
    );
  }
}

export default Upload;
