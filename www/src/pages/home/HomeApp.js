import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import Jumbotron from '../../components/Jumbotron';
import daniel from './daniel.jpg';

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
            <Card.Group centered itemsPerRow={3}>
              {themes.map((obj, idx) => {
                return (
                  <Card key={idx} as={Link} to={`/user/${idx}`}>
                    <Image src={daniel} />
                    <Card.Content>
                      <Card.Header>
                        {obj}
                      </Card.Header>

                      <Card.Meta>
                        <span className='date'>
                          Joined in 2015
                        </span>
                      </Card.Meta>

                      <Card.Description>
                        Matthew is a musician living in Nashville.
                      </Card.Description>
                    </Card.Content>
                  </Card>
                )
              })}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </div>
)

export default HomeApp
