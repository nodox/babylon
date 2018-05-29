# babylon
open source marketplace framework


# Workflow
Local development can occur in the following environments.

## development environment
- `docker-compose -p babylon_dev -f docker-compose/dev.yaml up`

Builds a image suite for local dev with live reload server (create-react-app)
to watch for code changes.

## production environment
- `docker-compose -p babylon_prod -f docker-compose/prod.yaml up --build`

Builds a local version of the production ready image suite.

## Connect to existing containers
If you want to connect to an existing, running container use:
- `$ docker exec -it <CONTAINER_NAME> <COMMAND>`

Examples:

Connect to the database container to inspect database
- `$ docker exec -it mongo_db mongo`
