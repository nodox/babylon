# babylon
The marketplace framework that builds Gatsby Manor, a marketplace for
developers to buy and sell GatsbyJS starters.

Gatsby Manor is currently
private. Once the Gatsby Manor gains traction, brand recognition,
and profitability we will create a new marketplace as a service business.
If that goes well, we'll open source the tech.

## Overview
The babylon project is a monorepo of services that make up the marketplace
framework.

### Services
- `server` is the backend to Gatsby Manor. The service is written with NodeJS,
ExpressJS, and MongoDB.
- `www` is the frontend to Gatsby Manor. The service is written with ReactJS
via create-react-app.
- Docker Compose files are a great place to see what services are in the
project.


### Development flow
`$ docker-compose -p babylon_dev -f docker-compose/dev.yaml up`

Builds a image suite for local dev with live reload server (create-react-app)
to watch for code changes.

`$ docker-compose -p babylon_prod -f docker-compose/prod.yaml up --build`

Builds a local version of the production ready image suite.

`$ docker exec -it <CONTAINER_NAME> <COMMAND>`

Connect to an existing, running container
Ex: `$ docker exec -it mongo_db mongo`
