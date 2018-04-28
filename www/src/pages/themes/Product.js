import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Grid, Menu, Button, Card, Image, Container, Header } from 'semantic-ui-react'
import Jumbotron from './components/Jumbotron'
import Details from './Details'
import Reviews from './Reviews'
import daniel from './daniel.jpg'
import april from './april.jpg'


// Inspiration
// https://www.appthemes.com/themes/classipress/#price-plan
// Top section (Jumbotron?), purchase on the left, product on right
// below section for everything else
// http://www.mojomarketplace.com/item/pav-styleshop-responsive-opencart-2-0-themes
// Similar to this without shifting upwards, use a gray background
class Product extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>

              <Grid>
                <Grid.Column floated='left' width={12} textAlign='left'>
                  <Header as='h1'>
                    April - A theme for the night
                  </Header>
                </Grid.Column>
                <Grid.Column floated='right' width={4} textAlign='right'>
                  <Header as='h1'>$523350</Header>
                </Grid.Column>
              </Grid>


              <Grid>
                <Grid.Column>
                  <Card centered fluid>
                    <Image src={april} />
                  </Card>
                </Grid.Column>
              </Grid>

              <Grid>
                <Grid.Column width={8}>
                  <Button fluid>Live Demo</Button>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Button fluid>Buy now</Button>
                </Grid.Column>
              </Grid>

            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Menu pointing secondary>
                <Menu.Item
                  as={Link}
                  to={`${this.props.match.url}/details`}
                  name='details'
                  active={activeItem === 'details'}
                  onClick={this.handleItemClick} />
                <Menu.Item
                  as={Link}
                  to={`${this.props.match.url}/reviews`}
                  name='reviews'
                  active={activeItem === 'reviews'}
                  onClick={this.handleItemClick} />
              </Menu>
              <Route path={`${this.props.match.path}/details`} component={Details} />
              <Route path={`${this.props.match.path}/reviews`} component={Reviews} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Product;
