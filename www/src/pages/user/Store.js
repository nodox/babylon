import React from 'react';
import { Link, Route } from 'react-router-dom';
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
  Comment
} from 'semantic-ui-react'


const themes = [
  'Massively',
  'Stellar',
  'Photon',
]


class Store extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid>

          <Grid.Row textAlign='center'>
            <Grid.Column>
              <Header as='h1'>
                Store List
              </Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Card.Group centered itemsPerRow={1}>
                {themes.map((obj, idx) => {
                  return (
                    <Card key={idx} as={Link} to={`/themes/${idx}/details`}>
                      <Card.Content>
                        <Card.Header>
                          Steve Sanders
                        </Card.Header>
                        <Card.Description>
                          Steve wants to add you to the group <strong>best friends</strong>
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
    );
  }
}

export default Store;
