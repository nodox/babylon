import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import daniel from './daniel.jpg';

import {
  Grid,
  Header,
} from 'semantic-ui-react'


const HomeApp = () => (
    <div>
      <Grid>
        <Grid.Row textAlign='center'>
          <Grid.Column>
              <Header as='h1'>
                Hello World!
                <Header.Subheader>
                  Boop!
                </Header.Subheader>
              </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
)

export default HomeApp
