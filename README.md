# Indigo UI

Styleguide app Indigo UI

## Development

- Install grunt: `npm install -g grunt`
- Install dependencies: `yarn`
- Run storybook `yarn run storybook`
- and open browser at [http://localhost:9009/](http://localhost:9009/)

### Docker

- Build: `docker-compose build` (See `Dockerfile` to check what's inside)
- Run container: `docker-compose run --rm --service-ports node`
  - Or manually: `docker-compose run --rm --service-ports node bash`
  - And storybook: `yarn run storybook`
