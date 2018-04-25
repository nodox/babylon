import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Grid, Menu, Button, Card, Image } from 'semantic-ui-react'
import Jumbotron from '../../components/Jumbotron'
import Details from './Details'
import Reviews from './Reviews'
import daniel from './daniel.jpg'

class Product extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Grid celled='internally' columns='equal' stackable>

          <Grid.Row>
            <Grid.Column>
              <Jumbotron>
                Product {this.props.match.params.id} Image Huge
                <Card centered>
                  <Image src={daniel} />
                </Card>
              </Jumbotron>
              <div>
                <Button.Group widths='3'>
                  <Button>Demo</Button>
                  <Button>Add to cart</Button>
                </Button.Group>
              </div>
              <Menu pointing secondary>
                <Menu.Item as={Link} to={`${this.props.match.url}/details`} name='details' active={activeItem === 'details'} onClick={this.handleItemClick} />
                <Menu.Item as={Link} to={`${this.props.match.url}/reviews`} name='reviews' active={activeItem === 'reviews'} onClick={this.handleItemClick} />
              </Menu>

            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Route path={`${this.props.match.path}/details`} component={Details} />
        <Route path={`${this.props.match.path}/reviews`} component={Reviews} />
      </div>
    );
  }
}

export default Product;
