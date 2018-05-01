import React from 'react';
import { Link, Route } from 'react-router-dom';
import daniel from './daniel.jpg';

import {
  Grid,
  Header,
  Card,
  Image,
  Button,
  Modal,
} from 'semantic-ui-react'


const themes = [
  'Massively',
  'Stellar',
  'Photon',
]


class Items extends React.Component {

  render() {
    return (
      <div>
        <Grid celled='internally' columns='equal' stackable>

          <Grid.Row textAlign='center'>
            <Grid.Column>
              <Header as='h1'>
                Store List Items
              </Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Card.Group centered itemsPerRow={3}>
                {themes.map((obj, idx) => {
                  return (
                    <Card key={idx} as={Link} to={`${this.props.match.url}/items/${idx}`}>
                      <Image src={daniel} />
                      <Card.Content>
                        <Card.Header>
                          {obj}
                        </Card.Header>

                        <Card.Description>
                          Matthew is a musician living in Nashville.
                        </Card.Description>

                      </Card.Content>
                      <Card.Content extra>
                        <Button basic fluid color='red'>Edit</Button>
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

export default Items;
