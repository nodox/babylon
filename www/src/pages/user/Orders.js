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
} from 'semantic-ui-react'


const themes = [
  'Massively',
  'Stellar',
  'Photon',
]


class Orders extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid celled='internally' columns='equal' stackable>

          <Grid.Row textAlign='center'>
            <Grid.Column>
              <Header as='h1'>
                Orders List
              </Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Card.Group centered itemsPerRow={3}>
                {themes.map((obj, idx) => {
                  return (
                    <Card key={idx} as={Link} to={`/themes/${idx}/details`}>
                      <Image src={daniel} />
                      <Card.Content>
                        <Card.Header>
                          {obj}
                        </Card.Header>

                        <Card.Description>
                          <List>
                            <List.Item>Order Id</List.Item>
                            <List.Item>License</List.Item>
                          </List>
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Button basic fluid color='black'>Download</Button>
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

export default Orders;
