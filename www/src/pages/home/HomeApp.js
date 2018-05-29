import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import Jumbotron from '../../components/Jumbotron';
import daniel from './daniel.jpg';
import LazyRender from 'react-lazy-render'
import {
  Container,
  Grid,
  Header,
  List,
  Card,
  Image,
  Button,
  Segment,
  Menu,
} from 'semantic-ui-react'


const themes = [
  'Massively',
  'Stellar',
  'Photon',
  'Eternal',
  'Joyful',
  'Lens',
]

var children = [];
for (var i = 0; i < 5000; i++) {
  // each child must have a consistent height
  children.push(
    <div style={{ height: 20 }}>
      #{i}
    </div>
  );
}


const HomeApp = () => (
    <div>
      <Grid celled='internally' columns='equal' stackable>

        <Grid.Row textAlign='center'>
          <Grid.Column>
            <Jumbotron>
              <Header as='h1'>
                Themes for Gatsby
                <Header.Subheader>
                  Easy to setup. Easy to customize. Easy to deploy.
                </Header.Subheader>
              </Header>
            </Jumbotron>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>


          </Grid.Column>
        </Grid.Row>

      </Grid>
    </div>
)

export default HomeApp
