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
