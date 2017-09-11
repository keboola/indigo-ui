# Indigo UI

[![Build Status](https://travis-ci.org/keboola/indigo-ui.svg?branch=master)](https://travis-ci.org/keboola/indigo-ui)

Indigo UI library, its CSS and React components. Also Styleguide app showing usages of this library.

## Development

- Install grunt: `npm install -g grunt`
- Install dependencies: `yarn`
- Run storybook `yarn storybook`
- Open browser at [http://localhost:9009/](http://localhost:9009/)

### Docker

- Build: `docker-compose build` (See `Dockerfile` to check what's inside)
- Run container: `docker-compose run --rm --service-ports node`
- Open browser at same address as above

## Deployment

First, check the content of `.travis.yml` file and documentation about
[Travis Deployment](https://docs.travis-ci.com/user/deployment).

### Storybook

- Storybook is deployed on every push to `master` branch (condition `"$TRAVIS_BRANCH" = "master"` in
`.travis.yml`).
- The `deploy-storybook.sh` script is responsible for deploying. Basically, it's "home made"
replacement for Travis `deploy` section, since that section is used for something else (covered
bellow).
- After successful deployment (copy to AWS S3), the Storybook build will be available online

### UI library, its CSS and components

- When you push new tag (and you should tag only commits in `master` branch) then
`yarn build-dist-css` command is executed (condition `"$TRAVIS_BRANCH" = "$TRAVIS_TAG"`)
- After successful build a deployment and publishing to npm is started (check `deploy` section in
`.travis.yml`)
- After successful deployment, there will be new version of CSS (available to link from Cloudfront)
and package published to npm.

#### Releasing new version

- New tagged release is only needed if there's a change in `src/indigo` or `src/components` folders
and you want to make those changes available for users.
- Please respect Semantic versioning

Steps:

1. Make sure everything is working as expected
2. Prepare new version with `npm version ...` command
(manual [here](https://docs.npmjs.com/cli/version)). This command should create new commit (with
version change in `package.json`) and tag for you. **There's no need to change `package.json`
manually or create tag manually.**
3. Push to `master` branch (e.g `git push origin master`)
4. Push newly created tag (e.g. `git push origin v1.0.0-beta-3`) <- This triggers deploy
5. Check package on npm, try to install it (or update to newer version from some project)
6. Write release notes [keboola/indigo-ui/releases](https://github.com/keboola/indigo-ui/releases)


## Older, `kbc-bootstrap` branch

This branch was introduced only for compatibility with
[keboola/kbc-bootstrap](https://github.com/keboola/kbc-bootstrap). Releases from this branch are
tagged as `v0.1.x` ([check here](https://github.com/keboola/indigo-ui/releases)) and you probably
won't need to do anything with this branch.
