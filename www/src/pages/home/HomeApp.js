import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import Jumbotron from '../../components/Jumbotron';
import daniel from './daniel.jpg';
import { AutoSizer, List } from 'react-virtualized'
import 'react-virtualized/styles.css'


import {
  Grid,
  Header,
  Card,
  Image,
  Button,
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
          <Grid.Column style={{ display: 'flex', flex: 1 }}>

            <AutoSizer>
              {({ height, width }) => (
                <List
                  height={height}
                  width={width}
                  rowHeight={50}
                  rowCount={themes.length}
                  rowRenderer={({ index, key, style }) => {
                    return (
                      <Card key={key} as={Link} to={`/themes/${index}/details`}>
                        <Image src={daniel} />
                        <Card.Content>
                          <Card.Header>
                            {themes[index]}
                          </Card.Header>

                          <Card.Description>
                            Matthew is a musician living in Nashville.
                          </Card.Description>
                        </Card.Content>

                        <Card.Content extra>
                          <p>$22</p>
                        </Card.Content>
                      </Card>
                    )
                  }}
                />
              )}
            </AutoSizer>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </div>
)

export default HomeApp
