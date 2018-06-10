import React from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import daniel from "./daniel.jpg";

import { Grid, Header, Card, Image, Button, Modal } from "semantic-ui-react";

const themes = ["Massively", "Stellar", "Photon"];

class Items extends React.Component {

  render() {
    const state = Math.random().toString(36).slice(2)
    const scope = 'repo'
    const client_id = '7f3a16b13129a94ba10e'
    const redirect_uri = 'http://localhost:5000/api/github/oauth/authorize'

    const githubLink = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}`

    return (
      <div>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column>
              <Header as="h1">Store List Items</Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <a href={githubLink} target="_blank">
                Upload Item
              </a>
              <Card.Group centered itemsPerRow={3}>
                {themes.map((obj, idx) => {
                  return (
                    <Card
                      key={idx}
                      as={Link}
                      to={`${this.props.match.url}/items/${idx}`}
                    >
                      <Image src={daniel} />
                      <Card.Content>
                        <Card.Header>{obj}</Card.Header>

                        <Card.Description>
                          Matthew is a musician living in Nashville.
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <p>$45</p>
                      </Card.Content>
                      <Card.Content extra>
                        <Button basic fluid color="red">
                          Edit
                        </Button>
                      </Card.Content>
                    </Card>
                  );
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
